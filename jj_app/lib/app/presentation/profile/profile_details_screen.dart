import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:jj_app/app/core/constants/constdata.dart';

class UserProfileScreen extends StatelessWidget {
  const UserProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: CustomScrollView(
        slivers: [
          // Profile Header with proper app bar spacing
          SliverAppBar(
            expandedHeight: 280.h,
            floating: false,
            pinned: true,
            flexibleSpace: LayoutBuilder(
              builder: (context, constraints) {
                final expanded = constraints.maxHeight > kToolbarHeight * 1.5;
                return FlexibleSpaceBar(
                  collapseMode: CollapseMode.pin,
                  titlePadding: EdgeInsets.only(
                    left: expanded ? 60.w : 16.w,
                    bottom: 16.h,
                  ),
                  title: AnimatedOpacity(
                    opacity: expanded ? 0 : 1,
                    duration: Duration(milliseconds: 200),
                    child: Text('Darling', style: TextStyle(color: kDark)),
                  ),
                  background: Container(
                    color: Colors.white,
                    padding: EdgeInsets.only(top: kToolbarHeight * 2.2),
                    child: Column(
                      children: [
                        // Profile Picture and Basic Info
                        Container(
                          padding: EdgeInsets.symmetric(horizontal: 20.w),
                          child: Row(
                            children: [
                              // Profile Picture
                              Container(
                                width: 90.w,
                                height: 90.h,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  border: Border.all(
                                    color: kSecondary,
                                    width: 2.w,
                                  ),
                                  image: const DecorationImage(
                                    image: NetworkImage(
                                      'https://randomuser.me/api/portraits/men/1.jpg',
                                    ),
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ),
                              SizedBox(width: 20.w),
                              // User Info
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Darling',
                                      style: TextStyle(
                                        fontSize: 22.sp,
                                        fontWeight: FontWeight.bold,
                                        color: kDark,
                                      ),
                                    ),
                                    SizedBox(height: 5.h),
                                    Text(
                                      'Travel Blogger | Photographer',
                                      style: TextStyle(
                                        fontSize: 14.sp,
                                        color: kGray,
                                      ),
                                    ),
                                    SizedBox(height: 10.h),
                                    Row(
                                      children: [
                                        Icon(
                                          Icons.location_on,
                                          size: 16.w,
                                          color: kSecondary,
                                        ),
                                        SizedBox(width: 5.w),
                                        Text(
                                          'Chandigarh, IN',
                                          style: TextStyle(
                                            fontSize: 12.sp,
                                            color: kGray,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 20.h),
                        // Stats Row
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 20.w),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              _buildStatItem('128', 'Posts'),
                              _buildStatItem('5.2K', 'Followers'),
                              _buildStatItem('342', 'Following'),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),

          SliverToBoxAdapter(
            child: Column(
              children: [
                // Featured Stories Section
                Padding(
                  padding: EdgeInsets.symmetric(
                    horizontal: 20.w,
                    vertical: 15.h,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Featured Stories',
                            style: TextStyle(
                              fontSize: 18.sp,
                              fontWeight: FontWeight.bold,
                              color: kDark,
                            ),
                          ),
                          Text(
                            'See All',
                            style: TextStyle(
                              fontSize: 14.sp,
                              color: kSecondary,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 15.h),
                      SizedBox(
                        height: 180.h,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            _buildFeaturedStory(
                              'Mountain Trek',
                              'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
                              '1.2K Likes',
                            ),
                            _buildFeaturedStory(
                              'Beach Sunset',
                              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                              '856 Likes',
                            ),
                            _buildFeaturedStory(
                              'City Lights',
                              'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
                              '1.5K Likes',
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),

                // Recent Posts Section
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 20.w),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Recent Posts',
                        style: TextStyle(
                          fontSize: 18.sp,
                          fontWeight: FontWeight.bold,
                          color: kDark,
                        ),
                      ),
                      SizedBox(height: 15.h),
                      _buildRecentPost(
                        'Mountain Adventures',
                        'Beautiful sunrise views from the summit',
                        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
                        '2 days ago',
                        '1.2K Likes',
                      ),
                      _buildRecentPost(
                        'Beach Paradise',
                        'Relaxing weekend at the beach',
                        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                        '4 days ago',
                        '856 Likes',
                      ),
                      _buildRecentPost(
                        'Urban Exploration',
                        'Discovering hidden gems in the city',
                        'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
                        '1 week ago',
                        '1.5K Likes',
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 30.h),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // Keep your existing _buildStatItem, _buildFeaturedStory, and _buildRecentPost methods
  Widget _buildStatItem(String value, String label) {
    return Column(
      children: [
        Text(
          value,
          style: TextStyle(
            fontSize: 18.sp,
            fontWeight: FontWeight.bold,
            color: kSecondary,
          ),
        ),
        SizedBox(height: 5.h),
        Text(label, style: TextStyle(fontSize: 14.sp, color: kGray)),
      ],
    );
  }

  Widget _buildFeaturedStory(String title, String imageUrl, String likes) {
    return Container(
      width: 150.w,
      margin: EdgeInsets.only(right: 15.w),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12.r),
        image: DecorationImage(
          image: NetworkImage(imageUrl),
          fit: BoxFit.cover,
        ),
      ),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.r),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.transparent, Colors.black.withOpacity(0.7)],
          ),
        ),
        child: Padding(
          padding: EdgeInsets.all(12.w),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 14.sp,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 5.h),
              Row(
                children: [
                  Icon(Icons.favorite, size: 14.w, color: Colors.white),
                  SizedBox(width: 5.w),
                  Text(
                    likes,
                    style: TextStyle(color: Colors.white, fontSize: 12.sp),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildRecentPost(
    String title,
    String description,
    String imageUrl,
    String time,
    String likes,
  ) {
    return Container(
      margin: EdgeInsets.only(bottom: 20.h),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12.r),
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
          ClipRRect(
            borderRadius: BorderRadius.vertical(top: Radius.circular(12.r)),
            child: Image.network(
              imageUrl,
              height: 180.h,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: EdgeInsets.all(15.w),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 16.sp,
                    fontWeight: FontWeight.bold,
                    color: kDark,
                  ),
                ),
                SizedBox(height: 5.h),
                Text(
                  description,
                  style: TextStyle(fontSize: 14.sp, color: kGray),
                ),
                SizedBox(height: 15.h),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Icon(Icons.favorite, size: 16.w, color: kSecondary),
                        SizedBox(width: 5.w),
                        Text(
                          likes,
                          style: TextStyle(fontSize: 12.sp, color: kGray),
                        ),
                      ],
                    ),
                    Text(time, style: TextStyle(fontSize: 12.sp, color: kGray)),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
