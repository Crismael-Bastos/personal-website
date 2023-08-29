import './index.css';
import { useQuery } from 'react-query';
import { useApi } from '../../hooks/useApi';

const api = useApi();
export default function Avatar(props) {
  const { data, isLoading } = useQuery('api', () => api.getData());

  if (!isLoading) {
    return (
      <div {...props}>
        <img
          className="avatar-img"
          src={data.avatar_url}
        />
      </div>
    );
  }

}
