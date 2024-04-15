import React, { useState, useEffect } from 'react';
import './post.css';
import { api } from '../apiService'; // Importa a instância do Axios corretamente

const Post = () => {
  const [postData, setPostData] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPostsAndComments(); // Chame a função para buscar os dados da API
        setPostData(data); // Atualize o estado com os dados recebidos da API
      } catch (error) {
        console.error('Erro ao buscar os posts e comentários:', error);
      }
    };

    fetchData(); // Chame a função para buscar os dados quando o componente for montado
  }, []);

  const fetchPostsAndComments = async () => {
    const response = await api.get('/posts'); // Substitua '/posts' pela rota da sua API que retorna os posts
    const posts = response.data;
    const commentsResponse = await api.get('/comments'); // Substitua '/comments' pela rota da sua API que retorna os comentários
    const comments = commentsResponse.data;
    return { posts, comments };
  };

  const handlePostClick = (postId) => {
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  return (
    <div className="row">
      {postData && postData.posts ? ( // Verifica se postData e postData.posts estão definidos antes de acessá-los
        postData.posts.map(post => (
          <div key={post.id} className="column">
            <div className="card" onClick={() => handlePostClick(post.id)}>
              <h3>{post.title}</h3>
              <h3>{post.time_read}</h3>
              <span>Clique para mais detalhes</span>
              {selectedPost === post.id && (
                <>
                  <div>{post.body}</div>
                  <ul>
                    {postData.comments.filter(comment => comment.post_id === post.id).map(comment => (
                      <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>Por: {comment.username}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>Carregando...</div> // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
      )}
    </div>
  );
};

export default Post;
