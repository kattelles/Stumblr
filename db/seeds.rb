User.create!([
  {username: "guest", password_digest: "$2a$10$oCZ3/ufxZ2WtVT8rgixl..cOMWbaES6FIC85x.7xB9h1r.YEEmExa", session_token: "m6UymqHNQWP+E2hwjY2bpA==", avatar: "https://res.cloudinary.com/kattelles/image/upload/v1467250036/tumblr_o51oavbMDx1ugpbmuo7_500_2_rpuo6x.png"},
  {username: "cats>dogs", password_digest: "$2a$10$q2ojECxIbkdNYg3bXu4uW.D1ZEalVtXUFbNRQeVqgUjPLu0tHUfni", session_token: "P+H9ZcPZZRWIcOZ2YPjD+g==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467848064/hdu8d6suu9dngvkv6wl3.jpg"},
  {username: "nature_lover", password_digest: "$2a$10$wVScrH7qVBTXgm/GKJEEMeNuS9qToXtANDfvFA.DogsT7hmxC.dKi", session_token: "jwAAAdblO5XKqmtmcHLw3w==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467848333/cbr6vo3hcgasv0ewr8ib.jpg"},
  {username: "quoteoftheday", password_digest: "$2a$10$wtu0/3IM3FEFc8KPtY5JKuYJ85EM/qYgT5ZmWN7cmjZZ6IX5UQxjC", session_token: "z6PsFpQ85ZNgCSDwhvWaXQ==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467995397/gxwcinyqwksqmf41qvu0.jpg"},
  {username: "coding_rocks", password_digest: "$2a$10$/czdtkLrRLjngxlDT/25TeGJKRICPSMeiDtUyHkKS9O5EfRUcZnW6", session_token: "hZWDXEOM6/SQ/jR83kePag==",  avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467849709/mn0le2iaarptn7pjbbii.png"},
  {username: "musiclover", password_digest: "$2a$10$kFlq.JiwomR8PAeC17RprOv3MvYpiexnyFhc6JATtsXltJ1C5uRRC", session_token: "+LP/uLLwaTXBP0qJdZAwGA==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467848868/qnoievydmn0rjn81b83l.png"},
  {username: "travel", password_digest: "$2a$10$hzIErk1hZfeRIgVpk4nG5.n0jddc1/l3hF84bObpw0O8i6.ZLiVfi", session_token: "HBzXDXz5EQRxAIZ8meGuKA==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467994971/ajaavo4dd4yhkdsx5ubd.png"},
  {username: "kat", password_digest: "$2a$10$OLh1H0UGx4qlvuQJRDA8nOrrCN0kfYwAbWQjTSlpKWdvlJf5pHXcC", session_token: "rZYscAta4FdLEIjmX8L+mw==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467997037/j8fpc9bzbsq8iv7zs4sb.png"},
  {username: "sanfran", password_digest: "$2a$10$KguXo8SlEov7q6CYhCG22exvh0T5GsWgEdEND0l2i0HKaFr7YVEye", session_token: "ZKJ9SHfH6jhsZy+zxhV71A==", avatar: "http://res.cloudinary.com/kattelles/image/upload/v1467847884/cmz8vbpuwddbmwofnf6b.gif"}
])


Blog.update(User.find_by_username("musiclover").id, :title => "music <3", :description => "a blog for music lovers.", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467848796/rrf8ee5njpob14t4tueu.jpg")
Blog.update(User.find_by_username("travel").id, :title => "My Travel Blog", :description => "photos from my travels", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467994928/lo8nvi9i9fl9hmhqtmiv.jpg")
Blog.update(User.find_by_username("quoteoftheday").id, :title => "Quote of the Day", :description => "a quote for every occasion", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467995585/b8bj7r447ycnnn5vxiuh.jpg")
Blog.update(User.find_by_username("coding_rocks").id, :title => "Coding Rocks!", :description => "tech and coding news", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467849747/tnba8uq7okv0dnqwkagd.jpg")
Blog.update(User.find_by_username("kat").id, :title => "Kat's Blog", :description => "creator of Stumblr", :cover_photo => "https://res.cloudinary.com/kattelles/image/upload/v1467249835/elusive_pineapples_msnx7m.png")
Blog.update(User.find_by_username("guest").id, :title => "my super cool blog!", :description => "pineapples are the best :)", :cover_photo => "https://res.cloudinary.com/kattelles/image/upload/v1467249835/elusive_pineapples_msnx7m.png")
Blog.update(User.find_by_username("sanfran").id, :title => "san fran fan!", :description => "all things san francisco.", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467847803/ubyjl5nf7tupohbo72n1.jpg")
Blog.update(User.find_by_username("cats>dogs").id, :title => "I <3 Cats!", :description => "cats are the best", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467848026/c3jrk1igdsl4nd7nbfom.jpg")
Blog.update(User.find_by_username("nature_lover").id, :title => "nature lover", :description => "all things nature.", :cover_photo => "http://res.cloudinary.com/kattelles/image/upload/v1467848420/cboqzynxoqrrrrykthq7.jpg")

Post.create!([
  {user_id: User.find_by_username("sanfran").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: "http://travel.usnews.com/San_Francisco_CA/Things_To_Do/", post_type: "Link", audio_url: nil, video_url: nil, image_caption: nil, link_title: "Best Things to Do in SF!", audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("sanfran").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467847627/d4dsxifkmzp2izvjvzje.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467848534/dy8qz8hfnchw5pjneby8.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467848552/gqbrjf5wdkzql942umrj.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467848566/xjdevsclmvnfmzhu4ubr.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467848580/ibphbyfqwmr0yrzqpwvw.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467669560/01_Take_Me_to_Church_nmkoun.m4a", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Take Me To Church by Hozier", video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467848910/10_Somewhere_Over_the_Rainbow_jkzwvy.m4a", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Somewhere Over the Rainbow", video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467848928/11_Follow_Your_Arrow_h9i1wv.m4a", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Follow Your Arrow by Kacey Musgraves", video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467848939/01_Welcome_To_New_York_nb5fpo.m4a", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Welcome to New York by Taylor Swift", video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467848958/Pointer_Sisters_Jump_kfd4ip.mp3", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Jump by the Pointer Sisters", video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467848986/Karmin_-_Hello_vvgyit.mp3", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Hello by Karmin", video_title: nil},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Audio", audio_url: "http://res.cloudinary.com/kattelles/video/upload/v1467848970/Wake_Me_Up_--_Avicii_ft._Aloe_Blacc_Lyrics_c8ehuw.mp3", video_url: nil, image_caption: nil, link_title: nil, audio_title: "Wake Me Up by Avicii", video_title: nil},
  {user_id: User.find_by_username("quoteoftheday").id, title: nil, content: nil, image_url: nil, quote: "I never said most of the things I said.", quote_source: "Yogi Berra", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("quoteoftheday").id, title: nil, content: nil, image_url: nil, quote: "It is not in the stars to hold our destiny but in ourselves. ", quote_source: "William Shakespeare", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("quoteoftheday").id, title: nil, content: nil, image_url: nil, quote: "What we think, we become.", quote_source: "Buddha", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("quoteoftheday").id, title: nil, content: nil, image_url: nil, quote: "You can't depend on your eyes when your imagination is out of focus. ", quote_source: "Mark Twain", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("guest").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467916737/y3aydkkmtt86sxpcg5z7.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467994632/dxdcizsgik7fiyzhjv.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("guest").id, title: "my first stumblr post!", content: "hello, world! ", image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Text", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467994676/paff3j7tjnwzze13ap9k.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("guest").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467846179/knq51xhcazsp0ysijdhe.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "cats are silly", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("nature_lover").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467994587/zhxbzclmep6kyrpuqh9c.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("sanfran").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467847676/vqamzz88iecvudxardur.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("sanfran").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Video", audio_url: nil, video_url: "https://www.youtube.com/watch?v=SLeBvceHRWY", image_caption: nil, link_title: nil, audio_title: nil, video_title: ""},
  {user_id: User.find_by_username("sanfran").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: "https://www.sfbike.org/resources/maps-routes/", post_type: "Link", audio_url: nil, video_url: nil, image_caption: nil, link_title: "Bike SF! :)", audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("travel").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467995185/tknzamdsvyfjhdftszjq.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("travel").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467995210/qfsbczbcqnanfbmxanxh.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("travel").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467995234/x3rrloglu41swiamt3gg.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("travel").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467995259/ucpduyp0zoppky9iqsxq.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("travel").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467995292/lue97cn1vkeegv39p08g.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("travel").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467995314/qrkbt2mumknfius3pgyr.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("quoteoftheday").id, title: nil, content: nil, image_url: nil, quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ", quote_source: "Maya Angelou", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("quoteoftheday").id, title: nil, content: nil, image_url: nil, quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. ", quote_source: "Confusius", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("coding_rocks").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467996142/d6grr2eywuoac8itjvcq.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("coding_rocks").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: "https://techcrunch.com/2016/07/08/where-todays-tech-can-and-cant-replace-humans/", post_type: "Link", audio_url: nil, video_url: nil, image_caption: nil, link_title: "Where today’s tech can, and can’t, replace humans", audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("coding_rocks").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: "https://techcrunch.com/2016/07/07/how-berlin-can-become-europes-no-1-tech-hub/", post_type: "Link", audio_url: nil, video_url: nil, image_caption: nil, link_title: "How Berlin can become Europe’s No. 1 tech hub", audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("coding_rocks").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Video", audio_url: nil, video_url: "https://www.youtube.com/watch?v=mMUTJtugdmw", image_caption: nil, link_title: nil, audio_title: nil, video_title: "Apps for planning your summer vacation"},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Video", audio_url: nil, video_url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y", image_caption: nil, link_title: nil, audio_title: nil, video_title: ""},
  {user_id: User.find_by_username("musiclover").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Video", audio_url: nil, video_url: "https://www.youtube.com/watch?v=tUG5atZoHtQ", image_caption: nil, link_title: nil, audio_title: nil, video_title: ""},
  {user_id: User.find_by_username("cats>dogs").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Video", audio_url: nil, video_url: "https://www.youtube.com/watch?v=SaA_cs4WZHM", image_caption: nil, link_title: nil, audio_title: nil, video_title: ""},
  {user_id: User.find_by_username("cats>dogs").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467996774/x3ksf4fazf6czzjse9nl.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("cats>dogs").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467996784/ac6rzuibux1kzlwqoqo6.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("cats>dogs").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Video", audio_url: nil, video_url: "https://www.youtube.com/watch?v=G8KpPw303PY", image_caption: nil, link_title: nil, audio_title: nil, video_title: "Funny Cats"},
  {user_id: User.find_by_username("kat").id, title: "Welcome to Stumblr!", content: "hey there, world.", image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Text", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("cats>dogs").id, title: nil, content: nil, image_url: nil, quote: "'Meow means 'woof' in cat.", quote_source: "George Carlin", link_url: nil, post_type: "Quote", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997139/hz2p4sleubngjls1hqje.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: nil, quote: nil, quote_source: nil, link_url: "https://www.appacademy.io/", post_type: "Link", audio_url: nil, video_url: nil, image_caption: nil, link_title: "app academy", audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997364/qif2ccbn0unswf9na67a.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "@fort funston", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("guest").id, title: "stumblr > tumblr ", content: "I love this app!", image_url: nil, quote: nil, quote_source: nil, link_url: nil, post_type: "Text", audio_url: nil, video_url: nil, image_caption: nil, link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997423/v0p2afikosbeegi6ethn.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "silly puppy", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997439/idqa4fdqjvjdlzdtowgr.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997473/ai7yncorivpr3pwszfce.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "@new brighton beach", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997594/hcxgdypcqehcxxtnf1g5.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "Madrid, Spain", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997624/ukxuw0i8goujihmkxkmd.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "Edinburgh, Scotland", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997653/ll8tmpkjiarobj9kyfre.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "Treasure Island", link_title: nil, audio_title: nil, video_title: nil},
  {user_id: User.find_by_username("kat").id, title: nil, content: nil, image_url: "http://res.cloudinary.com/kattelles/image/upload/v1467997690/fzoouugdzgqc8rainb80.jpg", quote: nil, quote_source: nil, link_url: nil, post_type: "Image", audio_url: nil, video_url: nil, image_caption: "Rome", link_title: nil, audio_title: nil, video_title: nil}
])


Follow.create!([
  {user_id: User.find_by_username("cats>dogs").id, blog_id: Blog.find_by_title("san fran fan!").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("music <3").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("Quote of the Day").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("Coding Rocks!").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("san fran fan!").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("I <3 Cats!").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("nature lover").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("music <3").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("Coding Rocks!").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("Quote of the Day").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("san fran fan!").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("I <3 Cats!").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("nature lover").id},
  {user_id: User.find_by_username("coding_rocks").id, blog_id: Blog.find_by_title("music <3").id},
  {user_id: User.find_by_username("coding_rocks").id, blog_id: Blog.find_by_title("Quote of the Day").id},
  {user_id: User.find_by_username("coding_rocks").id, blog_id: Blog.find_by_title("san fran fan!").id},
  {user_id: User.find_by_username("coding_rocks").id, blog_id: Blog.find_by_title("I <3 Cats!").id},
  {user_id: User.find_by_username("coding_rocks").id, blog_id: Blog.find_by_title("nature lover").id},
  {user_id: User.find_by_username("musiclover").id, blog_id: Blog.find_by_title("Quote of the Day").id},
  {user_id: User.find_by_username("musiclover").id, blog_id: Blog.find_by_title("Coding Rocks!").id},
  {user_id: User.find_by_username("musiclover").id, blog_id: Blog.find_by_title("san fran fan!").id},
  {user_id: User.find_by_username("musiclover").id, blog_id: Blog.find_by_title("I <3 Cats!").id},
  {user_id: User.find_by_username("musiclover").id, blog_id: Blog.find_by_title("nature lover").id},
  {user_id: User.find_by_username("cats>dogs").id, blog_id: Blog.find_by_title("Coding Rocks!").id},
  {user_id: User.find_by_username("cats>dogs").id, blog_id: Blog.find_by_title("Quote of the Day").id},
  {user_id: User.find_by_username("cats>dogs").id, blog_id: Blog.find_by_title("music <3").id},
  {user_id: User.find_by_username("cats>dogs").id, blog_id: Blog.find_by_title("nature lover").id},
  {user_id: User.find_by_username("kat").id, blog_id: Blog.find_by_title("music <3").id},
  {user_id: User.find_by_username("kat").id, blog_id: Blog.find_by_title("Quote of the Day").id},
  {user_id: User.find_by_username("kat").id, blog_id: Blog.find_by_title("Coding Rocks!").id},
  {user_id: User.find_by_username("kat").id, blog_id: Blog.find_by_title("san fran fan!").id},
  {user_id: User.find_by_username("kat").id, blog_id: Blog.find_by_title("I <3 Cats!").id},
  {user_id: User.find_by_username("kat").id, blog_id: Blog.find_by_title("nature lover").id},
  {user_id: User.find_by_username("sanfran").id, blog_id: Blog.find_by_title("Kat's Blog").id},
  {user_id: User.find_by_username("cats>dogs").id, blog_id: Blog.find_by_title("Kat's Blog").id},
  {user_id: User.find_by_username("nature_lover").id, blog_id: Blog.find_by_title("Kat's Blog").id},
  {user_id: User.find_by_username("quoteoftheday").id, blog_id: Blog.find_by_title("Kat's Blog").id},
  {user_id: User.find_by_username("coding_rocks").id, blog_id: Blog.find_by_title("Kat's Blog").id},
  {user_id: User.find_by_username("travel").id, blog_id: Blog.find_by_title("Kat's Blog").id},
  {user_id: User.find_by_username("guest").id, blog_id: Blog.find_by_title("my super cool blog!").id},
  {user_id: User.find_by_username("guest").id, blog_id: Blog.find_by_title("Kat's Blog").id}
])

Tag.create!([
  {name: "cats"},
  {name: "coding"},
  {name: "tech"},
  {name: "nature"},
  {name: "music"},
  {name: "photo"},
  {name: "SF"},
  {name: "travel"},
  {name: "quote"},
  ])


users = [User.find_by_username("musiclover").id, User.find_by_username("travel").id,
User.find_by_username("quoteoftheday").id, User.find_by_username("coding_rocks").id,
User.find_by_username("kat").id, User.find_by_username("guest").id,
User.find_by_username("cats>dogs").id, User.find_by_username("nature_lover").id]

Blog.find_by_title("My Travel Blog").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("travel").id)
end

Blog.find_by_title("I <3 Cats!").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("cats").id)
end

Blog.find_by_title("music <3").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("music").id)
end

Blog.find_by_title("Quote of the Day").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("quote").id)
end

Blog.find_by_title("Coding Rocks!").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("tech").id)
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("coding").id)
end

Blog.find_by_title("nature lover").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("nature").id)
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("photo").id)
end

Blog.find_by_title("san fran fan!").posts.each do |post|
  Tagging.create!(post_id: post.id, tag_id: Tag.find_by_name("SF").id)
end
