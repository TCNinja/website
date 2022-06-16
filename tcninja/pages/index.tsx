import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Layout from "./../components/layout";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        <div>

        </div>
      </Layout>

    </>
  );
};

export default Home;
