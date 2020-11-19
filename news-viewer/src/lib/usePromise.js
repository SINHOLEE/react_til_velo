import { useEffect, useState } from 'react';

const usePromise = (promiseCreator, depts, param) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [rejected, setRejected] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolve = await promiseCreator(param);
        setResolved(resolve);
      } catch (e) {
        setRejected('usePromise에서 실패했습니다.');
      }
      setLoading(false);
    };
    process();
  }, depts);
  return [loading, resolved, rejected];
};

export default usePromise;
