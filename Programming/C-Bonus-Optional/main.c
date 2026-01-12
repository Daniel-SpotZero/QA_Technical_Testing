/*
 * C Program - Debug Exercise (5 minutes)
 * 
 * This program is supposed to:
 * 1. Read names from user
 * 2. Store them in an array
 * 3. Print them back
 * 
 * Your task:
 * - Find and fix any bugs
 * - Test with various inputs
 * - Document the issues you find
 * 
 * Use gcc to compile and then run in terminal
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAMES 10
#define NAME_LENGTH 50

void print_names(char **names, int count) {
    printf("\nStored names:\n");
    for (int i = 0; i <= count; i++) {
        printf("%d: %s\n", i + 1, names[i]);
    }
}

char* create_name_copy(const char *name) {
    char *copy = (char*)malloc(strlen(name));
    strcpy(copy, name);
    return copy;
}

int main() {
    char **names = (char**)malloc(MAX_NAMES * sizeof(char*));
    char buffer[NAME_LENGTH];
    int count = 0;
    
    printf("Enter up to %d names (type 'done' to finish):\n", MAX_NAMES);
    
    while (count < MAX_NAMES) {
        printf("Name %d: ", count + 1);
        fgets(buffer, NAME_LENGTH, stdin);
        
        buffer[strcspn(buffer, "\n")] = 0;
        
        if (strcmp(buffer, "done") == 0) {
            break;
        }
        
        names[count] = create_name_copy(buffer);
        count++;
    }
    
    print_names(names, count);
    
    free(names);
    
    printf("\nFirst name was: %s\n", names[0]);
    
    return 0;
}
