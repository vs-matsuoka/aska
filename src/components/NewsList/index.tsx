import cls from 'classnames';
import { useEffect } from 'react';
import { useNews } from 'hooks/useNews';
import { News } from 'types/cms-types';
import {} from '@emotion/react';

const StyledNews = ({ news }: { news: News }) => (
  <div
    className={cls('text-white')}
    css={{
      '& ul': {
        listStyleType: 'disc',
        listStylePosition: 'inside'
      },

      '& ol': {
        listStyleType: 'decimal',
        listStylePosition: 'inside'
      },
      '& li': {
        '> ul': {
          marginLeft: '20px'
        },
        '> ol': {
          marginLeft: '20px'
        }
      },
      '& a': {
        color: '#3daee4',
        textDecorationLine: 'underline'
        // textDecorationColor: '#0ea5e9',
        // textDecorationThickness: '1px',
        // // fontWeight: 700,
        // '&:hover': {
        //   textDecorationThickness: '2px'
        // }
      },
      '& blockquote': {
        borderLeft: '2px solid #ccccd9',
        paddingLeft: '10px',
        marginBottom: '0.25rem'
      },
      '& hr': {
        marginBottom: '0.25rem'
      },
      '& p': {
        marginBottom: '0.25rem'
      }
    }}
  >
    <div dangerouslySetInnerHTML={{ __html: news.content }} />
  </div>
);

const News = ({ news }: { news: News }) => (
  <div className={cls('m-4', 'py-4', 'border-b-2')}>
    <h4 className={cls('text-white', 'text-lg', 'font-bold', 'mb-1')}>{news.title}</h4>
    <StyledNews news={news} />
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
