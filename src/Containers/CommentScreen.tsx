import React from 'react';
import {View} from 'react-native';
import CommentScreenPage from '../../src/Components/Ereviews/CommentScreenPage';
import CommentScreenHeader from '../../src/Components/Ereviews/CommentsScreenHeader';

const CommentScreen = () => {
  return (
    <View>
      <CommentScreenHeader />
      <CommentScreenPage />
    </View>
  );
};

export default CommentScreen;
