namespace C_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi ortasini tapan alqoritm

            int[] numbers = { 3, 7, 6, 18, 24, 22, 36 };
            int bolunensayi = 0;
            int sum = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 3 == 0)
                {
                    sum += numbers[i];
                    bolunensayi++;


                }
            }
            Console.WriteLine(sum / bolunensayi);
        }
    }
}