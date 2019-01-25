import React, { ReactNode } from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTheme } from '../theme/utils';

export interface IKSModalProps {
  close: () => void;
  title: string;
  open: boolean;
  children?: ReactNode
}

export const KSModal = ({ open, close, title, children }: IKSModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={open}
    >
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableHighlight onPress={close}>
            <Icon name="close" size={30} color={getTheme().underlayColor} />
          </TouchableHighlight>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 30,
    paddingHorizontal: 15
  },
  backButtonContainer: {
    paddingBottom: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  },
  titleText: {
    marginLeft: 30,
    fontSize: 18,
    color: getTheme().textSecondaryColor,
    marginBottom: 2
  }
});