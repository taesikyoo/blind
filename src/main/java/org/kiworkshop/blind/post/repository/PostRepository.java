package org.kiworkshop.blind.post.repository;

import org.kiworkshop.blind.post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
