import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";

export const metadata = {
  title: "Welcome - Livramento.dev",
  description: 'Matheus do Livramento - Back-end software engineer',
}

export default function Home() {
  return (
    <>
      <Greetings/>

      <AboutMe/>
    </>
  )
}
