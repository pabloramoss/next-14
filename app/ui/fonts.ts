/* importing fonts from google fonts */
import { Inter, Lusitana } from 'next/font/google';

/* exporting subset of fonts, in this case 'latin' */
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});