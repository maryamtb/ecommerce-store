const INITIAL_STATE = {
  sections: [

    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    // {
    //   title: 'hats',
    //   imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    //   id: 1,
    //   linkUrl: 'shop/hats'
    // },
    // {
    //   title: 'jackets',
    //   imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    //   id: 2,
    //   linkUrl: 'shop/jackets'
    // },
    // {
    //   title: 'sneakers',
    //   imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/092719-sneakers-1569598764.png?crop=1.00xw:1.00xh;0,0&resize=980:*',
    //   id: 3,
    //   size: 'small',
    //   linkUrl: 'shop/sneakers'
    // },
    // {
    //   title: 'womens',
    //   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    //   size: 'large',
    //   id: 4,
    //   linkUrl: 'shop/womens'
    // },
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
