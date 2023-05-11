import Head from 'next/head';

const Title = ({ title }: { title?: string }) => {
  return <Head>{title ? <title>{title} | 音MAD DREAM MATCH -天-</title> : <title>音MAD DREAM MATCH -天-</title>}</Head>;
};

export default Title;
