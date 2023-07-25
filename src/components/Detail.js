import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase';

const Detail = (props) => {

    const { id } =  useParams();
    const [detailData , setDetailData ] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const docRef = doc(db, "movies", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setDetailData(docSnap.data());
            } else {
              console.log("No such document in Firebase 🔥");
            }
          } catch (error) {
            console.log("Error getting document:", error);
          }
        };
    
        fetchData();
      }, [id]);

    return (
        <Container>
            <BackGround>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </BackGround>

            <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>{detailData.subTitle}</SubTitle>
                <Decription>{detailData.description}</Decription>
            </ContentMeta>
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px); 
`;

const BackGround = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{ 
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px){
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 25vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);

    img{
        width: 32px;

    }

    &:hover{
        background: rgb(200,200,200);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span{
        background-color: rgb(249,249,249);
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    cursor: pointer;
    border-radius: 50%;

    div{
        height: 40px;
        width: 40px;
        background: rgb(0,0,0);
        border-radius: 50%;

        img{
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249,249,249);
    margin-top: 15px;
    font-size: 15px;
    min-height: 20px;

    @media (mx-width: 768px){
        font-size: 12px;
    }
`;

const Decription = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249,249,249);

    @media (max-width: 768px){
        font-size: 14px;
    }
`;

export default Detail;