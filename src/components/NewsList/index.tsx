import cls from 'classnames';
import { useEffect } from 'react';
import { useNews } from 'hooks/useNews';
import { News } from 'types/cms-types';
import {} from '@emotion/react';

const News = ({ news }: { news: News }) => (
  <div className={cls('m-4', 'py-4', 'border-b-2')}>
    <h4 className={cls('text-white', 'text-lg', 'font-bold', 'mb-1')}>{news.title}</h4>
    <div className={cls('text-white', '')}>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>
  </div>
);

const NewsList = () => {
  const { getNewsList, newsList } = useNews();

  useEffect(() => {
    getNewsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cls('w-[320px]', 'h-[335px]', 'overflow-y-scroll')}>
      {newsList?.map((item) => (
        <News key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
