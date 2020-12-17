import React from 'react';
import { getData } from '../../utils/getData';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const data = getData();

  return {
    props: {
      elements: data.slice(0, Number(params.el) + 1),
    },
  };
}

export async function getStaticPaths() {
  const data = getData();

  return {
    paths: data.map((el) => ({
      params: { el: el.toString() },
    })),
    fallback: false,
  };
}

const ArchivePage = ({ elements }) => {
  return (
    <>
      {elements.map((el) => (
        <h1>{el}</h1>
      ))}
      <Link href={`/archive/${elements.length + 9}`} scroll={false}>
        load moar
      </Link>
    </>
  );
};

export default ArchivePage;
