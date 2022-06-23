import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globals } from '../../constants/styles';

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: globals.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: { fontSize: 12, color: globals.colors.primary400 },
  sum: { fontSize: 16, fontWeight: 'bold', color: globals.colors.primary500 },
});
