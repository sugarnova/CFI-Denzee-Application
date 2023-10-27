#include<iostream>
#include<vector>
#include<unordered_map>
#define ll long long
using namespace std;
void fun()
{
    int n;
    cin>>n;
    string s;
    cin>>s;
    vector<int>v(n);
    unordered_map<int,int>mp;

    for(int i=0;i<n;i++)
    {
        v[i]=(int)(s[i]-'0');
    }

    ll ans=0;

    vector<int>sum(n);
    sum[0]=v[0];
    for(int i=1;i<n;i++)
    {
        sum[i]=sum[i-1]+v[i];
        if(mp[sum[i]-i]!=0)
        {
            ans+=mp[sum[i]-i];
        }

        mp[sum[i]-i]++;
    }

    cout<<ans<<endl;
}

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        fun();
    }
}



// int minTime(vector<int>v, vector<int>temp)
// {

//     sort(temp.begin(),temp.end(), greater<int>());
//     sort(v.begin(),v.end());

//     vector<int>store(v.size(),0);
    
//     for(int i=0;i<v.size();i++)
//     {
//       store[i]=v[i];
//     }

//     vector<int>cnt(v.size(),0);

//     // int ans=0;
//     int index=0;
//     for(int i=0;i<temp.size();i+=4)
//     {
//         int j=i;
//         int te=store[index];
        
//         while(j<min(i+4, (int)temp.size()))
//         {
//             store[index]=max(te+temp[j],store[index]);
//             j++;
//         }
//         index++;
//         if(index==v.size())
//         {
//             index=0;
//         }
//     }


//     int ans=0;
//     for(int i=0;i<v.size();i++)
//     {
//         ans=max(ans,store[i]);
//     }

//     cout<<ans<<endl;
    
//     return 0;
// }




