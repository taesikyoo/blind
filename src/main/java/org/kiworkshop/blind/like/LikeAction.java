package org.kiworkshop.blind.like;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.kiworkshop.blind.post.domain.Post;
import org.kiworkshop.blind.user.domain.User;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class LikeAction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_action_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    public LikeAction(Post post, User user) {
        this.post = post;
        this.user = user;
    }
}
