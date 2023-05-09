import {
    useDeleteFriendRequestMutation,
} from '../../store/social/friendApiSlice';
import "./FriendCard.css"

const FriendCard = ({ friend, refetchFriends }) => {
    const [deleteFriend] = useDeleteFriendRequestMutation();

    const handleRemoveFriend = async () => {
        try {
            await deleteFriend(friend.id);
            refetchFriends();
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div className="friend_card__container">
            <h2>{friend.friend_username}</h2>
            <img src={friend.friend_avatar} alt="friendicon" />
            <p>Friend since {friend.created_at.slice(0, 10)}</p>
            <p>Status: {friend.status}</p>
            <button onClick={handleRemoveFriend}>Remove Friend</button>
        </div>
    );
};

export default FriendCard;