interface ContentData {
  contacts: {
    address: string;
    phones: string[];
    email: string;
    workingHours: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  texts: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
      features: Array<{
        title: string;
        description: string;
      }>;
    };
    gallery: {
      title: string;
      description: string;
    };
    rules: {
      title: string;
      rules: string[];
      cancellation: string[];
      penalties: string[];
    };
  };
  photos: {
    hero: string;
    gallery: {
      beach: string[];
      territory: string[];
      sauna: string[];
      building: string[];
    };
  };
}

export async function loadContent(): Promise<ContentData> {
  try {
    const [contactsResponse, textsResponse, photosResponse] = await Promise.all([
      fetch('/api/content/contacts'),
      fetch('/api/content/texts'),
      fetch('/api/content/photos')
    ]);

    const contacts = await contactsResponse.text();
    const texts = await textsResponse.text();
    const photos = await photosResponse.text();

    return parseContent(contacts, texts, photos);
  } catch (error) {
    console.error('Failed to load content:', error);
    return getDefaultContent();
  }
}

function parseContent(contactsText: string, textsText: string, photosText: string): ContentData {
  const contacts = parseContacts(contactsText);
  const texts = parseTexts(textsText);
  const photos = parsePhotos(photosText);

  return { contacts, texts, photos };
}

function parseContacts(text: string) {
  const lines = text.split('\n');
  const phones: string[] = [];
  
  let address = '';
  let email = '';
  let workingHours = '';
  let latitude = '';
  let longitude = '';

  for (const line of lines) {
    if (line.includes('Республика Хакасия')) {
      address = line.replace(/[\[\]]/g, '').trim();
    } else if (line.match(/^\d{4}-\d{3}-\d{4}$/)) {
      phones.push(line.trim());
    } else if (line.includes('@')) {
      email = line.trim();
    } else if (line.includes('Круглосуточно')) {
      workingHours = line.trim();
    } else if (line.includes('Широта:')) {
      latitude = line.split(':')[1]?.trim() || '';
    } else if (line.includes('Долгота:')) {
      longitude = line.split(':')[1]?.trim() || '';
    }
  }

  return {
    address,
    phones,
    email,
    workingHours,
    coordinates: { latitude, longitude }
  };
}

function parseTexts(text: string) {
  const lines = text.split('\n');
  
  const features = [
    {
      title: 'Экологически чистый район',
      description: 'Наша база отдыха расположена в живописном месте на берегу озера Белё, вдали от городской суеты и загрязнения.'
    },
    {
      title: 'Современный комфорт',
      description: 'Все номера оборудованы современными удобствами для комфортного проживания.'
    },
    {
      title: 'Отличное расположение',
      description: 'Прямо на берегу красивейшего озера Белё в Республике Хакасия.'
    }
  ];

  const rules = [
    'Соблюдать тишину с 23:00 до 09:00',
    'Парковать автомобиль в отведенных местах',
    'Запрещено курить в помещениях (штраф 5000 руб.)',
    'Запрещено разводить огонь вне специальных мест (штраф 5000 руб.)'
  ];

  const cancellation = [
    'За 2 недели до заезда – 100% возврат',
    'За 1 неделю до заезда – 50% возврат',
    'Менее 1 недели и при досрочном выезде – 20% возврат'
  ];

  const penalties = [
    'За задержку выезда: 500 руб. за каждые 30 минут'
  ];

  return {
    hero: {
      title: 'База отдыха ПРЕСТИЖ',
      subtitle: 'Комфортный отдых на озере Белё в Хакасии',
      description: 'Комфортный отдых на природе в экологически чистом районе. Современные номера, развитая инфраструктура и незабываемые впечатления на берегу озера Белё.'
    },
    about: {
      title: 'О нас',
      description: 'База отдыха "ПРЕСТИЖ" – это место, где сочетаются комфорт современной жизни и красота нетронутой природы Хакасии',
      features
    },
    gallery: {
      title: 'Галерея',
      description: 'Посмотрите на нашу прекрасную базу отдыха и убедитесь в качестве наших услуг'
    },
    rules: {
      title: 'Правила проживания',
      rules,
      cancellation,
      penalties
    }
  };
}

function parsePhotos(text: string) {
  const beachPhotos = [
    'https://www.belevip.ru/sites/default/files/01.jpg',
    'https://www.belevip.ru/sites/default/files/02.jpg',
    'https://www.belevip.ru/sites/default/files/03_1.jpg',
    'https://www.belevip.ru/sites/default/files/04.jpg',
    'https://www.belevip.ru/sites/default/files/dsc00708.jpg',
    'https://www.belevip.ru/sites/default/files/dsc00712.jpg'
  ];

  const territoryPhotos = [
    'https://www.belevip.ru/sites/default/files/10.jpg',
    'https://www.belevip.ru/sites/default/files/11.jpg',
    'https://www.belevip.ru/sites/default/files/12.jpg',
    'https://www.belevip.ru/sites/default/files/13.jpg',
    'https://www.belevip.ru/sites/default/files/14_1.jpg',
    'https://www.belevip.ru/sites/default/files/15.jpg',
    'https://www.belevip.ru/sites/default/files/16.jpg',
    'https://www.belevip.ru/sites/default/files/17.jpg',
    'https://www.belevip.ru/sites/default/files/18.jpg'
  ];

  const saunaPhotos = [
    'https://www.belevip.ru/sites/default/files/30.jpg',
    'https://www.belevip.ru/sites/default/files/31.jpg',
    'https://www.belevip.ru/sites/default/files/32_0.jpg',
    'https://www.belevip.ru/sites/default/files/33.jpg',
    'https://www.belevip.ru/sites/default/files/34.jpg',
    'https://www.belevip.ru/sites/default/files/35.jpg',
    'https://www.belevip.ru/sites/default/files/36.jpg',
    'https://www.belevip.ru/sites/default/files/37.jpg',
    'https://www.belevip.ru/sites/default/files/38.jpg',
    'https://www.belevip.ru/sites/default/files/39.jpg',
    'https://www.belevip.ru/sites/default/files/40.jpg',
    'https://www.belevip.ru/sites/default/files/41.jpg',
    'https://www.belevip.ru/sites/default/files/42.jpg'
  ];

  const buildingPhotos = [
    'https://www.belevip.ru/sites/default/files/100.jpg',
    'https://www.belevip.ru/sites/default/files/101.jpg',
    'https://www.belevip.ru/sites/default/files/102.jpg',
    'https://www.belevip.ru/sites/default/files/103.jpg',
    'https://www.belevip.ru/sites/default/files/104.jpg',
    'https://www.belevip.ru/sites/default/files/105_0.jpg',
    'https://www.belevip.ru/sites/default/files/106_0.jpg',
    'https://www.belevip.ru/sites/default/files/107.jpg',
    'https://www.belevip.ru/sites/default/files/108.jpg',
    'https://www.belevip.ru/sites/default/files/109.jpg',
    'https://www.belevip.ru/sites/default/files/110.jpg',
    'https://www.belevip.ru/sites/default/files/111.jpg',
    'https://www.belevip.ru/sites/default/files/112.jpg',
    'https://www.belevip.ru/sites/default/files/113.jpg',
    'https://www.belevip.ru/sites/default/files/114.jpg',
    'https://www.belevip.ru/sites/default/files/115.jpg',
    'https://www.belevip.ru/sites/default/files/116.jpg',
    'https://www.belevip.ru/sites/default/files/117.jpg',
    'https://www.belevip.ru/sites/default/files/dsc00731.jpg',
    'https://www.belevip.ru/sites/default/files/dsc00758.jpg',
    'https://www.belevip.ru/sites/default/files/dsc00762.jpg',
    'https://www.belevip.ru/sites/default/files/dsc00764.jpg'
  ];

  return {
    hero: beachPhotos[0],
    gallery: {
      beach: beachPhotos,
      territory: territoryPhotos,
      sauna: saunaPhotos,
      building: buildingPhotos
    }
  };
}

function getDefaultContent(): ContentData {
  return {
    contacts: {
      address: 'Республика Хакасия, Ширинский район, озеро Белё',
      phones: ['8950-965-5555', '8902-467-5000', '8902-468-9999'],
      email: '',
      workingHours: 'Круглосуточно',
      coordinates: { latitude: '', longitude: '' }
    },
    texts: {
      hero: {
        title: 'База отдыха ПРЕСТИЖ',
        subtitle: 'Комфортный отдых на озере Белё в Хакасии',
        description: 'Комфортный отдых на природе в экологически чистом районе. Современные номера, развитая инфраструктура и незабываемые впечатления на берегу озера Белё.'
      },
      about: {
        title: 'О нас',
        description: 'База отдыха "ПРЕСТИЖ" – это место, где сочетаются комфорт современной жизни и красота нетронутой природы Хакасии',
        features: [
          {
            title: 'Экологически чистый район',
            description: 'Наша база отдыха расположена в живописном месте на берегу озера Белё, вдали от городской суеты и загрязнения.'
          },
          {
            title: 'Современный комфорт',
            description: 'Все номера оборудованы современными удобствами для комфортного проживания.'
          },
          {
            title: 'Отличное расположение',
            description: 'Прямо на берегу красивейшего озера Белё в Республике Хакасия.'
          }
        ]
      },
      gallery: {
        title: 'Галерея',
        description: 'Посмотрите на нашу прекрасную базу отдыха и убедитесь в качестве наших услуг'
      },
      rules: {
        title: 'Правила проживания',
        rules: [
          'Соблюдать тишину с 23:00 до 09:00',
          'Парковать автомобиль в отведенных местах',
          'Запрещено курить в помещениях (штраф 5000 руб.)',
          'Запрещено разводить огонь вне специальных мест (штраф 5000 руб.)'
        ],
        cancellation: [
          'За 2 недели до заезда – 100% возврат',
          'За 1 неделю до заезда – 50% возврат',
          'Менее 1 недели и при досрочном выезде – 20% возврат'
        ],
        penalties: [
          'За задержку выезда: 500 руб. за каждые 30 минут'
        ]
      }
    },
    photos: {
      hero: 'https://www.belevip.ru/sites/default/files/01.jpg',
      gallery: {
        beach: [
          'https://www.belevip.ru/sites/default/files/01.jpg',
          'https://www.belevip.ru/sites/default/files/02.jpg',
          'https://www.belevip.ru/sites/default/files/03_1.jpg',
          'https://www.belevip.ru/sites/default/files/04.jpg',
          'https://www.belevip.ru/sites/default/files/dsc00708.jpg',
          'https://www.belevip.ru/sites/default/files/dsc00712.jpg'
        ],
        territory: [
          'https://www.belevip.ru/sites/default/files/10.jpg',
          'https://www.belevip.ru/sites/default/files/11.jpg',
          'https://www.belevip.ru/sites/default/files/12.jpg',
          'https://www.belevip.ru/sites/default/files/13.jpg',
          'https://www.belevip.ru/sites/default/files/14_1.jpg',
          'https://www.belevip.ru/sites/default/files/15.jpg',
          'https://www.belevip.ru/sites/default/files/16.jpg',
          'https://www.belevip.ru/sites/default/files/17.jpg',
          'https://www.belevip.ru/sites/default/files/18.jpg'
        ],
        sauna: [
          'https://www.belevip.ru/sites/default/files/30.jpg',
          'https://www.belevip.ru/sites/default/files/31.jpg',
          'https://www.belevip.ru/sites/default/files/32_0.jpg',
          'https://www.belevip.ru/sites/default/files/33.jpg',
          'https://www.belevip.ru/sites/default/files/34.jpg',
          'https://www.belevip.ru/sites/default/files/35.jpg',
          'https://www.belevip.ru/sites/default/files/36.jpg',
          'https://www.belevip.ru/sites/default/files/37.jpg',
          'https://www.belevip.ru/sites/default/files/38.jpg',
          'https://www.belevip.ru/sites/default/files/39.jpg',
          'https://www.belevip.ru/sites/default/files/40.jpg',
          'https://www.belevip.ru/sites/default/files/41.jpg',
          'https://www.belevip.ru/sites/default/files/42.jpg'
        ],
        building: [
          'https://www.belevip.ru/sites/default/files/100.jpg',
          'https://www.belevip.ru/sites/default/files/101.jpg',
          'https://www.belevip.ru/sites/default/files/102.jpg',
          'https://www.belevip.ru/sites/default/files/103.jpg',
          'https://www.belevip.ru/sites/default/files/104.jpg',
          'https://www.belevip.ru/sites/default/files/105_0.jpg',
          'https://www.belevip.ru/sites/default/files/106_0.jpg',
          'https://www.belevip.ru/sites/default/files/107.jpg',
          'https://www.belevip.ru/sites/default/files/108.jpg',
          'https://www.belevip.ru/sites/default/files/109.jpg',
          'https://www.belevip.ru/sites/default/files/110.jpg',
          'https://www.belevip.ru/sites/default/files/111.jpg',
          'https://www.belevip.ru/sites/default/files/112.jpg',
          'https://www.belevip.ru/sites/default/files/113.jpg',
          'https://www.belevip.ru/sites/default/files/114.jpg',
          'https://www.belevip.ru/sites/default/files/115.jpg',
          'https://www.belevip.ru/sites/default/files/116.jpg',
          'https://www.belevip.ru/sites/default/files/117.jpg',
          'https://www.belevip.ru/sites/default/files/dsc00731.jpg',
          'https://www.belevip.ru/sites/default/files/dsc00758.jpg',
          'https://www.belevip.ru/sites/default/files/dsc00762.jpg',
          'https://www.belevip.ru/sites/default/files/dsc00764.jpg'
        ]
      }
    }
  };
}