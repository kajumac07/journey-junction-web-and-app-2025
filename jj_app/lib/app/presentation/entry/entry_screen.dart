import 'package:flutter/material.dart';

class EntryScreen extends StatelessWidget {
  const EntryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final pages = <Widget>[
      const ReportsScreen(),
      const MyJobsScreen(),
      const HistoryScreen(),
    ];
    return Scaffold();
  }
}
