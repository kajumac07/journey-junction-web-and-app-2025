import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:jj_app/app/core/constants/constdata.dart';
import 'package:jj_app/app/core/utils/app_styles.dart';
import 'package:jj_app/app/global/widgets/reusable_text.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kLightWhite,
      appBar: AppBar(
        elevation: 0,
        backgroundColor: kLightWhite,
        title: Text("My Profile", style: appStyle(24, kDark, FontWeight.bold)),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildProfileHeader(),
            SizedBox(height: 20.h),
            _buildSocialStats(),
            SizedBox(height: 20.h),
            _buildProfileSections(),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileHeader() {
    return Container(
      padding: EdgeInsets.all(20.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(30.r),
          bottomRight: Radius.circular(30.r),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 20,
            spreadRadius: 1,
          ),
        ],
      ),
      child: Row(
        children: [
          Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: kPrimary, width: 2.w),
            ),
            child: CircleAvatar(
              radius: 40.r,
              backgroundImage: NetworkImage(
                "https://randomuser.me/api/portraits/men/1.jpg",
              ),
            ),
          ),
          SizedBox(width: 20.w),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ReusableText(
                  text: "Alex Johnson",
                  size: 20,
                  color: kDark,
                  fw: FontWeight.bold,
                ),
                SizedBox(height: 5.h),
                ReusableText(
                  text: "Travel Blogger & Photographer",
                  size: 14,
                  color: kGray,
                  fw: FontWeight.normal,
                ),
                SizedBox(height: 10.h),
                Row(
                  children: [
                    Icon(Icons.location_on, size: 16, color: kPrimary),
                    SizedBox(width: 5.w),
                    ReusableText(
                      text: "San Francisco, CA",
                      size: 14,
                      color: kDark,
                      fw: FontWeight.normal,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSocialStats() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 20.w),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildStatItem("128", "Blogs"),
          _buildStatItem("5.2K", "Followers"),
          _buildStatItem("342", "Following"),
          _buildStatItem("24", "Bookmarks"),
        ],
      ),
    );
  }

  Widget _buildStatItem(String value, String label) {
    return Column(
      children: [
        Container(
          width: 70.w,
          height: 70.h,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.05),
                blurRadius: 10,
                spreadRadius: 2,
              ),
            ],
          ),
          child: Center(
            child: ReusableText(
              text: value,
              size: 18,
              color: kPrimary,
              fw: FontWeight.bold,
            ),
          ),
        ),
        SizedBox(height: 5.h),
        ReusableText(
          text: label,
          size: 12,
          color: kGray,
          fw: FontWeight.normal,
        ),
      ],
    );
  }

  Widget _buildProfileSections() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 20.w),
      child: Column(
        children: [
          _buildSectionCard(
            title: "Account Settings",
            items: [
              _buildListTile(Icons.person_outline, "Edit Profile", () {}),
              _buildListTile(
                Icons.notifications_outlined,
                "Notifications",
                () {},
              ),
              _buildListTile(Icons.privacy_tip_outlined, "Privacy", () {}),
            ],
          ),
          SizedBox(height: 20.h),
          _buildSectionCard(
            title: "Blog Management",
            items: [
              _buildListTile(Icons.article_outlined, "My Blogs", () {}),
              _buildListTile(Icons.bookmark_border, "Saved Blogs", () {}),
              _buildListTile(Icons.star_border, "My Ratings", () {}),
            ],
          ),
          SizedBox(height: 20.h),
          _buildSectionCard(
            title: "More Options",
            items: [
              _buildListTile(Icons.help_outline, "Help & Support", () {}),
              _buildListTile(Icons.info_outline, "About Us", () {}),
              _buildListTile(
                Icons.description_outlined,
                "Terms & Conditions",
                () {},
              ),
              _buildListTile(Icons.logout, "Logout", () {
                _showLogoutDialog();
              }),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildSectionCard({
    required String title,
    required List<Widget> items,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20.r),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            spreadRadius: 2,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: EdgeInsets.all(16.w),
            child: Text(title, style: appStyle(18, kPrimary, FontWeight.bold)),
          ),
          Divider(height: 1, color: kGrayLight),
          Column(children: items),
        ],
      ),
    );
  }

  Widget _buildListTile(IconData icon, String title, VoidCallback onTap) {
    return ListTile(
      leading: Icon(icon, color: kPrimary),
      title: Text(title, style: appStyle(14, kDark, FontWeight.normal)),
      trailing: Icon(Icons.arrow_forward_ios, size: 16, color: kGray),
      onTap: onTap,
    );
  }

  void _showLogoutDialog() {
    showDialog(
      context: context,
      builder:
          (context) => AlertDialog(
            title: Text("Logout", style: appStyle(18, kDark, FontWeight.bold)),
            content: Text(
              "Are you sure you want to logout?",
              style: appStyle(14, kGray, FontWeight.normal),
            ),
            actions: [
              TextButton(
                child: Text(
                  "Cancel",
                  style: appStyle(14, kGray, FontWeight.bold),
                ),
                onPressed: () => Navigator.pop(context),
              ),
              TextButton(
                child: Text(
                  "Logout",
                  style: appStyle(14, kPrimary, FontWeight.bold),
                ),
                onPressed: () {
                  // Implement logout
                  Navigator.pop(context);
                },
              ),
            ],
          ),
    );
  }
}
