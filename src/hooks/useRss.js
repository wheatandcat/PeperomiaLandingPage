import { useState, useEffect } from 'react';
import axios from 'axios';
import convert from 'xml-js';

// Hook
function useRss() {
  const [rss, setRss] = useState([]);

  const fetchRss = async () => {
    const res = await axios.get(
      'https://www.wheatandcat.me/rss/category/%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88'
    );
    const data = convert.xml2js(res.data, {
      compact: true,
      ignoreDeclaration: true,
    });

    setRss(data.rss.channel.item || []);
  };

  useEffect(() => {
    fetchRss();
  }, []);

  return rss;
}

export default useRss;
