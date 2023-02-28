using System;

namespace tack2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers ={23, 234, 123, 432, 45, 203, 4321};
            int sum = 0;

         for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > 99)
                {
                    sum += numbers[i];
                }

            }
            Console.WriteLine( sum );
        }
    }
}