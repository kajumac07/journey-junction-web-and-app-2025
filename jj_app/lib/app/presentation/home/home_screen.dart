import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';
import 'package:jj_app/app/core/constants/constdata.dart';
import 'package:jj_app/app/core/utils/app_styles.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 1,
        backgroundColor: kPrimary,
        title: Text(
          'Home Screen',
          style: appStyle(20, kWhite, FontWeight.w600),
        ),
        actions: [
          Badge(
            backgroundColor: kWhite,
            label: Text(
              "1",
              style: appStyle(12, kSecondary, FontWeight.normal),
            ),
            child: GestureDetector(
              child: CircleAvatar(
                backgroundColor: kSecondary,
                radius: 17.r,
                child: Icon(Icons.notifications, size: 25.sp, color: kWhite),
              ),
            ),
          ),
          SizedBox(width: 10.w),
          GestureDetector(
            child: CircleAvatar(
              backgroundColor: kSecondary,
              radius: 17.r,
              child: Icon(Icons.person, size: 25.sp, color: kWhite),
            ),
          ),
          SizedBox(width: 10.w),
        ],
      ),

      body: Container(),
    );
  }
}
