import styles from './footer.module.scss';
import { SiTailwindcss, SiReact, SiLeaflet, SiGithub } from 'react-icons/si';

/* eslint-disable-next-line */
export interface FooterProps { }

export function Footer(props: FooterProps) {
  return (
    <footer className='text-center flex justify-center items-center my-4  gap-2 flex-nowrap'>
      <a
        className='bg-white hover:bg-gray-800 hover:text-white duration-150 ease-in-out py-2 px-2 text-zinc-800 rounded-full'
        target="_blank"
        title="Mi perfíl de Github"
        href="https://github.com/carlosgallego98" rel="noreferrer"
      >
        <SiGithub className='m-0 p-0' />
      </a>
      <a
        className='bg-white hover:bg-gray-800 hover:text-white duration-150 ease-in-out py-2 px-2 text-zinc-800 rounded-full'
        target="_blank"
        title="Leaflet para React"
        href="https://react-leaflet.js.org/" rel="noreferrer"
      >
        <SiLeaflet className='m-0 p-0' />
      </a>
      <a
        className='bg-white hover:bg-gray-800 hover:text-white duration-150 ease-in-out py-2 px-2 text-zinc-800 rounded-full'
        target="_blank"
        title="React"
        href="https://es.reactjs.org/" rel="noreferrer"
      >
        <SiReact className='m-0 p-0' />
      </a>
      <a
        className='bg-white hover:bg-gray-800 hover:text-white duration-150 ease-in-out py-2 px-2 text-zinc-800 rounded-full'
        target="_blank"
        title="Tailwind CSS"
        href="https://tailwindcss.com/" rel="noreferrer"
      >
        <SiTailwindcss className='m-0 p-0' />
      </a>
    </footer>
  );
}

export default Footer;
