import cls from 'classnames';
import Image from 'next/image';
import { useEffect } from 'react';
import { useNews } from 'hooks/useNews';
import { News } from 'types/cms-types';

const StyledNews = ({ news }: { news: News }) => (
  <div
    className={cls('text-white', 'text-[14px]')}
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
          marginLeft: '15px'
        },
        '> ol': {
          marginLeft: '15px'
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
        marginBottom: '0.25rem',
        borderTop: '1px solid #ccad70'
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
  <div className={cls('m-4', 'py-4', 'border-b-2', 'border-[#CCAD70]')}>
    <h4 className={cls('text-white', 'text-lg', 'font-bold', 'mb-2')}>
      <Image className={cls('inline', 'mr-1', 'mb-1')} src="/Top/Ornament_Point_01.png" alt="icon" width={20} height={20} />
      {news.title}
    </h4>
    <StyledNews news={news} />
  </div>
);

const NewsList = () => {
  const { getNewsList, newsList } = useNews();

  useEffect(() => {
    getNewsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={cls('w-[320px]', 'h-[335px]', 'overflow-y-scroll')}>{newsList?.map((item) => <News key={item.id} news={item} />)}</div>;
};

export default NewsList;
