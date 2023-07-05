// libs/client.ts の client を使用し、newsのlistを取得するカスタムフックを作成します。

import { useCallback, useState } from 'react';
import { client } from 'libs/client';
import { News } from 'types/cms-types';

export const useNews = () => {
  const [newsList, setNewsList] = useState<Array<News>>();
  const getNewsList = useCallback(() => {
    client
      .getList<News>({
        endpoint: 'news-dev'
      })
      .then((res) => {
        setNewsList(res.contents);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  return { getNewsList, newsList };
};
