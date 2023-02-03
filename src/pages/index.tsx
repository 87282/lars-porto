import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import  Projects  from "../components/projects";
import Over from "../components/over";
import Skills from "../components/skills";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
  <>
    <Navbar/>  
 
    <Header/>
  <Over/>
    
      <Skills/>
      <Projects/>
</>
  );
};

export default Home;
