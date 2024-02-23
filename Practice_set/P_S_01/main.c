#include <stdio.h>
void main()
{
    for (int i = 1; i <= 5; i++)
    {
        if (i % 4 == 0 || i % 5 == 0)
        {
            printf("%d", i);
        }
    }
}
