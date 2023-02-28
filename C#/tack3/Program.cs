namespace tack3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 34, 12, 57, 83, 98, 35, 65 };
            int min = numbers[0];
            int max = numbers[0];
            int ortalama = 0;
for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
                if (numbers[i] < min)
                {
                    min = numbers[i];
                }
            }
            ortalama = (max + min) / 2;
            Console.WriteLine( ortalama);
        }
    }
}