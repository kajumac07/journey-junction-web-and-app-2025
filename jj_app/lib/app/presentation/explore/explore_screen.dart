import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';
import 'package:jj_app/app/core/constants/constdata.dart';
import 'package:jj_app/app/core/utils/app_styles.dart';
import 'package:jj_app/app/presentation/cloudNotificationScreen/cloud_notification_screen.dart';
import 'package:jj_app/app/presentation/profile/profile_screen.dart';

class ExploreScreen extends StatelessWidget {
  const ExploreScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 1,
        title: Text('Explore', style: appStyle(20, kDark, FontWeight.w600)),
        actions: [
          Badge(
            backgroundColor: kPrimary,
            label: Text("1", style: appStyle(12, kWhite, FontWeight.normal)),
            child: GestureDetector(
              onTap: () => Get.to(() => CloudNotificationScreen()),
              child: CircleAvatar(
                backgroundColor: kSecondary,
                radius: 17.r,
                child: Icon(Icons.notifications, size: 25.sp, color: kWhite),
              ),
            ),
          ),
          SizedBox(width: 10.w),
          GestureDetector(
            onTap: () => Get.to(() => ProfileScreen()),
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
