import {useEffect} from "react";

export const API_URL = "http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com";

export const LOCATIONS_API_URL = API_URL + '/locations';
export const RESTAURANTS_API_URL = API_URL + '/restaurants';
export const HOTELS_API_URL = API_URL + '/hotels';
export const SEARCH_API_URL = API_URL + '/search';

export const InstanceGenerator = (props) => {
  const {
    model,
    setInstances,
    setLoading,
    query
  } = props;

  function getInstances() {
    fetch(API_URL + '/' + model + query)
      .then((res) => res.json())
      .then((data) => {
        setInstances((prevData) => {
          setLoading(false);
          return data;
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  useEffect(() => {
    setLoading(true);
    setInstances([]);
    getInstances();
  }, [query]);

  return null;
}

export default InstanceGenerator;