import {
  Bricolage_Grotesque,
  Montserrat,
  Host_Grotesk,
  DM_Sans,
  Bangers,
  Press_Start_2P,
  Eater,
  Irish_Grover,
  Nosifer,
  Kalnia_Glaze,
  Rubik_Gemstones,
} from 'next/font/google';

const Bricolage_font = Bricolage_Grotesque({ subsets: ['latin'] });
const Montserrat_font = Montserrat({ subsets: ['latin'] });
const Host_Grotesk_font = Host_Grotesk({ subsets: ['latin'] });
const DM_Sans_font = DM_Sans({ subsets: ['latin'] });
const Kalnia_Glaze_font = Kalnia_Glaze({ subsets: ['latin'] });
const Rubik_Gemstones_font = Rubik_Gemstones({
  weight: '400',
  subsets: ['latin'],
});
const Press_Start_2P_font = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});
const Bangers_font = Bangers({ weight: '400', subsets: ['latin'] });
const Eater_font = Eater({ weight: '400', subsets: ['latin'] });
const Irish_Grover_font = Irish_Grover({ weight: '400', subsets: ['latin'] });
const Nosifer_font = Nosifer({ weight: '400', subsets: ['latin'] });

export const Bricolage = Bricolage_font.className;
export const Montserratfont = Montserrat_font.className;
export const HostGrotesk = Host_Grotesk_font.className;
export const DMSans = DM_Sans_font.className;
export const KalniaGlaze = Kalnia_Glaze_font.className;
export const RubikGemstones = Rubik_Gemstones_font.className;
export const PressStart2P = Press_Start_2P_font.className;
export const Bangersfont = Bangers_font.className;
export const Eaterfont = Eater_font.className;
export const IrishGrover = Irish_Grover_font.className;
export const Nosiferfont = Nosifer_font.className;
