// src/components/Profile/ProfilePage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import * as S from "./ProfilePage.styles";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <S.PageContainer>
      <S.AuthCard>
        <S.Title>Profile</S.Title>
        
        <S.ProfileContainer>
          {user.photoURL && (
            <S.ProfileImage
              src={user.photoURL}
              alt="Profile"
            />
          )}
          <S.ProfileName>{user.displayName}</S.ProfileName>
          <S.ProfileEmail>{user.email}</S.ProfileEmail>
        </S.ProfileContainer>

        <S.InfoContainer>
          <div>
            <S.InfoLabel>User ID:</S.InfoLabel>
            <S.InfoValue>{user.uid}</S.InfoValue>
          </div>
          
          <div>
            <S.InfoLabel>Email Verified:</S.InfoLabel>
            <S.InfoValue>{user.emailVerified ? "Yes" : "No"}</S.InfoValue>
          </div>
          
          <div>
            <S.InfoLabel>Account Created:</S.InfoLabel>
            <S.InfoValue>
              {user.metadata.creationTime && new Date(user.metadata.creationTime).toLocaleString()}
            </S.InfoValue>
          </div>
        </S.InfoContainer>

        <S.LogoutButton
          onClick={() => {
            auth.signOut();
            navigate("/login");
          }}
        >
          Sign Out
        </S.LogoutButton>
      </S.AuthCard>
    </S.PageContainer>
  );
};

export default ProfilePage;