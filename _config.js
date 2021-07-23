module.exports = {
  /** Site MetaData (Required all)*/
  title: `D.log`, 
  description: `Blog Description`,          // (* Required)
  author: `didue`,                         // (* Required)
  language: 'ko-KR',                        // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://didue.github.io/didue.github.io',

  /** Header */
  profileImageFileName: 'memoji.jpg', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'sʏsᴛᴇᴍ.ᴏᴜᴛ.ᴘʀɪɴᴛ("ʜᴇʟʟᴏ, ᴡᴏʀʟᴅ!");',
  name: 'HAN JISOO',
  company: '',
  location: 'Seoul, Korea',
  email: 'jisoo.han107@gmail.com',
  website: 'https://bit.ly/3iBq0A9',           // ex.'https://junhobaik.github.io'
  linkedin: 'https://www.linkedin.com/in/%EC%A7%80%EC%88%98-%ED%95%9C-225677215/',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: 'https://instagram.com/d_diue',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/didue',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: '',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: '', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-1986476617358545', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
