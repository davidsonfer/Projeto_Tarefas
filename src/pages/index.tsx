"Use client";

import { GetStaticProps } from "next";

import Head from "next/head";
import styles from "@/styles/home.module.css";
import Image from "next/image";

import heroImg from "../../public/assets/hero.png";

import { getDocs, collection } from "firebase/firestore";

import { db } from "../../src/services/firebaseConnection";
import { useSession } from "next-auth/react";
interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize todas as suas tarefas de forma útil</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.heroImg}
            src={heroImg}
            alt="logo tarefas+"
            priority
          />
        </div>
        <h1 className={styles.title}>
          sistema feito para você organizar <br />
          seus estudos e tarefas
        </h1>

        {session && (
          <div className={styles.infoContent}>
            <section className={styles.box}> +{posts} posts</section>
            <section className={styles.box}>+ {comments} comentários</section>
          </div>
        )}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Buscar do banco os numeros e mandar pro componente

  const commentRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");

  const commentSnapshot = await getDocs(commentRef);
  const postsSnapshot = await getDocs(postRef);

  return {
    props: {
      posts: postsSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },

    revalidate: 60, //Seria revalidado a cada 60s
  };
};
