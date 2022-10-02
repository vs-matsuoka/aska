import { useRouter } from 'next/router';
import urlJoin from 'url-join';

export const useAssetPath = (path: string) => {
  let { basePath } = useRouter();
  if (basePath) {
    return urlJoin(basePath, path);
  }
  return path;
};
