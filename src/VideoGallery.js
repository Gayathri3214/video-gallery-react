import React from 'react';
import './VideoGallery.css'; 

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "Na Roja Nuvve - Video Song | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab",
      thumbnailUrl: "https://i.ytimg.com/vi/JTpDCoxZdv8/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsikqtZfeLnKhQPyi3-KRQgVMvBA",
      likes: 1500,
      views: 25000,
      channelName: "Saregama Telugu",
      channelLogoUrl: "https://yt3.ggpht.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      title: "Pushpa - The Rise Full Songs Jukebox (Telugu) | Allu Arjun | Rashmika | FahadhFaasil | Sukumar | DSP",
      thumbnailUrl: "https://i.ytimg.com/vi/tt2EXP9iuNU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBXxIIn01Ga-CEp-9POjlxpVuCf8w://i.ytimg.com/vi/JTpDCoxZdv8/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsikqtZfeLnKhQPyi3-KRQgVMvBA",
      likes: "1.4M",
      views: "1.9M",
      channelName: "Aditya Music India",
      channelLogoUrl: "https://yt3.ggpht.com/FA98Wt-W9Dnxd7YFMvUqjMI5SWGN5Ex4K2nm8pCyljcCY6bLTVZ-RiUo23CUTTUoBAiK9dlrIA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      title: "Filmymoji || Middle Class Madhu || Vakrathunda || Episode 04 || Double Game || MCM  Vakrathundathunda",
      thumbnailUrl: "https://i.ytimg.com/vi/zBnooLQBngE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCLWgR4PgPI5abMdEyA9yzcK4ZuqQ",
      likes: 1500,
      views: 25000,
      channelName: "filmy moji",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbrRuB2spuPZDEowqyccnHxarRIoe1i_8UXlR_yUg=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 4,
      title: "Tom & Jerry | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
      thumbnailUrl:"https://i.ytimg.com/vi/5oH9Nr3bKfw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADljubpShDmiw4b5a5pkjD83fDdA",
      likes: 5500,
      views: 65000,
      channelName: "WB Kids",
      channelLogoUrl:"https://yt3.googleusercontent.com/rPoRRDAbbFQpeqCZFdndLgMRCm6KGS90QD0x7PlYaHoSXVG74ASmPwY8n3I1GVqD1lr8cIhKfA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,
      title: "Cairo to Alexandria Train Journey in Egypt Railways || Cairo to Alexandria Train Journey in Egypt Railways",
      thumbnailUrl: "https://i.ytimg.com/vi/QlCLKxDapyU/hqdefault.jpg",
      likes: 4500,
      views: 253300,
      channelName: "Naa Anveshana",
      channelLogoUrl: "https://yt3.googleusercontent.com/DLer1VC9KzQIOiTYFPrNXSndwrgXHplj6e4r0_JNkPcTaB0PfRwDQTPGWhhXoA12JiSGi991rCU=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 6,
      title: "MEGA- Telugu movie title teaser | Harsha Sai | Mitraaw | Shree pictures \ Harsha Sai | Mitraaw | Shree pictures",
      thumbnailUrl: "https://i.ytimg.com/vi_webp/X7l2BReciU4/sddefault.webp",
      likes: 3400,
      views: 24800,
      channelName: "Harsha Sai - For You Telugu",
      channelLogoUrl: "https://yt3.googleusercontent.com/OAbmQ0zVhm4BbBGjQNj02_TY2SDONvjc-Qv1trs2VZUUkjFAwU-hwHj2eBoJvjuppKFa5zLt=s100-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 7,
      title: "Airport లో పట్టుకొని ₹50,000 ఫైన్ వేశారు.. | WORLD RIDE DAY 168 | Bayya Sunny Yadav",
      thumbnailUrl: "https://i.ytimg.com/vi_webp/bYGPaLKsf0k/sddefault.webp",
      likes: 1900,
      views: 75000,
      channelName: "Bayya Sunny Yadav",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbxywfIgT9LlE14bGvynd5z3ixIFY_1VQTSOkQv_w=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 8,
      title: "$1 vs $1,000,000 Hotel Room! || $100 vs $1,000,000,000 Hotel Room! , you will be shoked and ammazed",
      thumbnailUrl: "https://i.ytimg.com/vi_webp/iogcY_4xGjo/sddefault.webp",
      likes: 9500,
      views: 288890,
      channelName: "MrBeast",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 9,
      title: "Shashi | Telugu Shortfilm 2023 | Rowdy Baby | South Indian Logic || telugu short films ,rowdy baby hero and heroine",
      thumbnailUrl: "https://i.ytimg.com/vi/eL-AmbBCLDY/sddefault.jpg",
      likes: 8500,
      views: 88900,
      channelName: "Rowdy Baby",
      channelLogoUrl: "https://i.ytimg.com/vi/eL-AmbBCLDY/sddefault.jpg",
    },
    {
      id: 10,
      title: "The Software Engineer 2.0 | Shanmukh Jaswanth | Vaishnavi Chaitanya | Jhakaas | Infinitum Media| shaort films in telugu , youth entertainment ",
      thumbnailUrl: "https://i.ytimg.com/vi_webp/QGtWOlFPnww/sddefault.webp",
      likes: 66660,
      views: 905570,
      channelName: "Shanmukh Jaswanth",
      channelLogoUrl: "https://yt3.googleusercontent.com/cwRc-xkFPDD20DEVVPD7WXcxhCdSXJbBljFep64Co-1ex4ufc4LCAfhrDBOtDdq-HfZT1lHG9S0=s100-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 11,
      title: "How to Make an E-Commerce Website Create AI Animated Story Videos with ChatGPT by The AI Hustle 86,675 views 1 month ago 5 minutes, 52 seconds",
      thumbnailUrl: "https://i.ytimg.com/vi/w5znYC6SMVk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAp1ORLZatVjRfOTZfFx86SZMzonw",
      likes: 100,
      views: 9900,
      channelName: "Ai Lockup",
      channelLogoUrl: "https://yt3.ggpht.com/a1l3BhtaMF9wP_iRGHGEGqVqFH1DzfN-yy_GCZBw9_pC4HEkVrPFr-iAfejSWNEwgGcnkVmrJA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 12,
      title: "What after Degree Job or Higher Studies || డిగ్రీ తరవాత ఏం చెయ్యాలి || Job vs Higher Studies by FrontLinesMedia 80,896 views 1 year ago 8 minutes",
      thumbnailUrl: "https://i.ytimg.com/vi/GNkvsXPoN4k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsjrJy3YakcngbBZRP5tQJ-w3QtA",
      likes: 8500,
      views: 98660,
      channelName: "FrontLinesMedia",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKZWjGA6tz053K63lB5BDJUVEnaSQYp0uhNC4aA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 13,
      title: "How to Make an E-Commerce Website Create AI Animated Story Videos with ChatGPT by The AI Hustle 86,675 views 1 month ago 5 minutes, 52 seconds",
      thumbnailUrl: "https://i.ytimg.com/vi/tKwPzva-tOc/hqdefault.jpg",
      likes: 8970,
      views: 888880,
      channelName: "Website Learners",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYD2DbsCwRIQMxpcYBU3HPt374-5EnPYg_vUUzC=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 14,
      title: "🤑Earn $10,000 Per Month - Create AI Animated Story Videos with ChatGPT by The AI Hustle 86,675 views 1 month ago 5 minutes, 52 seconds",
      thumbnailUrl: "https://i.ytimg.com/vi/SeGNUfnAv8U/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKgH4MqgVG80OF4kfNmMfU0-JvQQ",
      likes: 1888,
      views: 95000,
      channelName: "The AI Hustle",
      channelLogoUrl: "https://yt3.ggpht.com/6mbuxJM8BuTALNSwJOri55Ocg_xmwzxG6NmVvp9U2UhKzEIZ0EiYON_Rrr2ve9ZYMrjUGxAGqQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 15,
      title: "8 Crazy AI Tools You Must Try In 2023 || tools you must use in 2023 as software developer",
      thumbnailUrl: "https://i.ytimg.com/vi/_vA7GHjpw4s/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMeXZzBv1og7ObxsbPjU_1M0qZ2A",
      likes: 1442,
      views: 35500,
      channelName: "Trakin Tech",
      channelLogoUrl: "https://yt3.ggpht.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 16,
      title: "Create Youtube Videos Using A.i | Telugu || Create Youtube Videos Using A.i | Telugu || free money",
      thumbnailUrl: "https://i.ytimg.com/vi/s4I7If0jmsg/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQG1vHU_3wvJSKMQe3H_IFZGaUrw",
      likes: 8500,
      views: 95000,
      channelName: "Rishi Kesav",
      channelLogoUrl: "https://yt3.ggpht.com/PEWvluiG-gQKPEbSlpBHF0odBd6IZcUf3fdvCpUIuSSuMWoUCSXxQkqrk2qNet67BFKibV_z=s68-c-k-c0x00ffffff-no-rj",
    }
  ];

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img src={video.thumbnailUrl} alt={video.title} className="thumbnail" />
          <div className="video-info">
            <img src={video.channelLogoUrl} alt={video.channelName} className="channel-logo" />
            <div className="video-details">
              <span className="video-title">{video.title}</span>
              <span className="channel-name">{video.channelName}</span>
              <div className="likes-views">
                <span className="likes">{`${video.likes} Likes`}</span>
                <span className="views">{`${video.views} Views`}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;