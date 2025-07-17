#include <fcntl.h>
#include <linux/input.h>
#include <unistd.h>
#include <time.h>
#include <cstdio>
#include <cstring>
#include <dirent.h>
#include <vector>
#include <thread>
#include <atomic>
#include <mutex>

// Shared variable to store the last event time
std::atomic<double> last_event_time(-1);
std::mutex fds_mutex; // Mutex to protect file descriptors
bool stop_monitoring = false; // Flag to stop monitoring

std::vector<int> get_input_devices() {
    std::vector<int> fds; // File descriptors for all input devices
        
    const char *input_dir = "/dev/input/";

    DIR *dir = opendir(input_dir);
    if (!dir) {
        perror("Failed to open /dev/input/");
        return fds;
    }

    struct dirent *entry;

    // Open all input event devices
    while ((entry = readdir(dir)) != NULL) {
        if (strncmp(entry->d_name, "event", 5) == 0) { // Look for "eventX" files
            char device_path[256];
            snprintf(device_path, sizeof(device_path), "%.*s%.*s",
                (int)(sizeof(device_path) - 1), input_dir,
                (int)(sizeof(device_path) - strlen(input_dir) - 1), entry->d_name);
            int fd = open(device_path, O_RDONLY | O_NONBLOCK); // Open in non-blocking mode
            if (fd >= 0) {
                std::lock_guard<std::mutex> lock(fds_mutex);
                fds.push_back(fd);
                // printf("Monitoring device: %s\n", device_path);
            } else {
                perror("Failed to open input device");
            }
        }
    }
    closedir(dir);

    return fds;
}

// Function to monitor input events in the background
void monitor_input_events(std::vector<int> fds) {

    struct input_event ev;
    struct timespec now;

    // Monitor input events in a loop
    while (stop_monitoring == false) {
        for (int fd : fds) {
            while (read(fd, &ev, sizeof(ev)) > 0) {
                if (ev.type == EV_KEY || ev.type == EV_REL || ev.type == EV_ABS) {
                    clock_gettime(CLOCK_MONOTONIC, &now);
                    last_event_time = now.tv_sec + now.tv_nsec / 1e9;
                    // printf("Input event detected. Updated last_event_time: %f\n", last_event_time.load());
                }
            }
        }
        usleep(500000); // Sleep for 500ms to reduce CPU usage
    }

    // Close all file descriptors
    std::lock_guard<std::mutex> lock(fds_mutex);
    for (int fd : fds) {
        close(fd);
    }
}

// Function to get the current idle time
double getTime() {
    struct timespec now;
    clock_gettime(CLOCK_MONOTONIC, &now);
    double current_time = now.tv_sec + now.tv_nsec / 1e9;

    double last_time = last_event_time.load();
    if (last_time == -1) {
        printf("No input events detected yet\n");
        return -1;
    }

    return current_time - last_time;
}

// Function to initialize the monitoring
void start() {

    std::vector<int> fds = get_input_devices();

    if (fds.empty()) {
        fprintf(stderr, "No input devices found\n");
    }else{
        // Initialize the last_event_time to -1
        struct timespec now;
        clock_gettime(CLOCK_MONOTONIC, &now);
        last_event_time = now.tv_sec + now.tv_nsec / 1e9;
        // Set the stop_monitoring flag to false
        stop_monitoring = false;

        // Start the background thread to monitor input events
        std::thread input_thread(monitor_input_events, fds);
        input_thread.detach(); // Detach the thread to run in the background
    }

}

// Function to stop the monitoring
void stop() {
    stop_monitoring = true;
    
}