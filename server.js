const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const dbFilePath = path.resolve(__dirname, './db/index.js');
let currentData = require(dbFilePath)();
const router = jsonServer.router(currentData);

const loadData = () => {
  delete require.cache[require.resolve(dbFilePath)];
  return require(dbFilePath)();
};

fs.watchFile(dbFilePath, { interval: 500 }, (_curr, _prev) => {
  console.log('Checking for data changes...');
  const newData = loadData();

  if (JSON.stringify(newData) !== JSON.stringify(currentData)) {
    console.log('Data changed, reloading JSON Server...');
    currentData = newData;
    router.db.setState(currentData);
  } else {
    console.log('No changes in data detected.');
  }
});

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

server.use('/crm/mp', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
        const filterValue = req.query[key];
        filteredData = filteredData.filter(item =>
          String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        );
      }
    });

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});

server.use('/kfm/kim', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
        
        let querys = {}
        Object.assign(querys, req.query);
        delete querys?.page;
        delete querys.limit;
        delete querys.sort;
        delete querys.order;

        // const filterValue = req.query[key];
        // filteredData = filteredData.filter(item =>
        //   String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        // );

        filteredData = filteredData.filter(item => {
          return Object.entries(querys).some(([key, value]) => item[key].toString().toLowerCase().includes(String(value).toLowerCase()));
        });
      }
    });

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});
server.use('/kfm/tvr', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order'&& key !== 'endDate' && key !== 'startDate') {
        const filterValue = req.query[key];
        filteredData = filteredData.filter(item =>
          String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        );
      }
    });
    console.log(req.query)
    const { startDate, endDate, date_field = 'timestamp' } = req.query;
    // Chuyển startDate và endDate thành đối tượng Date (nếu có)
    const startDateObj = startDate ? new Date(startDate).getTime() : null;
    const endDateObj = endDate ? new Date(endDate).getTime() : null;
    console.log(filteredData)
    if (startDateObj || endDateObj) {
      filteredData = filteredData.filter(item => {
        const itemDate = new Date(item[date_field]).getTime(); // Sử dụng trường ngày động

        // Kiểm tra nếu chỉ có startDate
        if (startDateObj && !endDateObj && itemDate < startDateObj) {
          return false;
        }

        // Kiểm tra nếu chỉ có endDate
        if (!startDateObj && endDateObj && itemDate > endDateObj) {
          return false;
        }

        // Kiểm tra nếu có cả startDate và endDate
        if (startDateObj && endDateObj) {
          if (itemDate < startDateObj || itemDate > endDateObj) {
            return false;
          }
        }

        return true;
      });
    }
    console.log(filteredData)

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});
server.use('/kfm/sim', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
        const filterValue = req.query[key];
        filteredData = filteredData.filter(item =>
          String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        );
      }
    });

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});
server.use('/kfm/kms', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
        const filterValue = req.query[key];
        filteredData = filteredData.filter(item =>
          String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        );
      }
    });

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});
server.use('/rm/cl', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
        const filterValue = req.query[key];
        filteredData = filteredData.filter(item =>
          String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        );
      }
    });

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});
server.use('/kfm/ms', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    Object.keys(req.query).forEach(key => {
      if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
        const filterValue = req.query[key];
        filteredData = filteredData.filter(item =>
          String(item[key]).toLowerCase().includes(String(filterValue).toLowerCase()),
        );
      }
    });

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});

server.use('/common/info', (req, res, next) => {
  if (req.method === 'GET' && req.query.page && req.query.limit) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || null;
    const order = (req.query.order || 'DESC').toUpperCase();
    const collectionName = req.path.slice(1);

    // Access the collection from the database
    const collection = router.db.get(collectionName).value();

    if (!collection) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    let filteredData = [...collection];

    // Object.keys(req.query).forEach(key => {
    //   if (key !== 'page' && key !== 'limit' && key !== 'sort' && key !== 'order') {
    //     const filterValue = req.query[key];
    //     const regex = new RegExp(`^${String(filterValue).toLowerCase()}$`, 'i');
    //     filteredData = filteredData.filter(item =>
    //       regex.test(String(item[key]).toLowerCase())
    //     );
    //   }
    // });
    const { q } = req.query;
    // Tìm kiếm theo 'q' (tìm trong tất cả các trường)
    if (q) {
      const searchTerm = String(q).toLowerCase();
      filteredData = filteredData.filter(item => {
        return Object.values(item).some(value => {
          if (value && typeof value === 'string') {
            return value.toLowerCase().includes(searchTerm);
          }
          return false;
        });
      });
    }
    Object.entries(req.query).forEach(([key, filterValue]) => {
      if (!['page', 'limit', 'sort', 'order', 'q', 'startDate', 'endDate', 'dateField'].includes(key)) {
        const regex = new RegExp(String(filterValue).toLowerCase(), 'i');
        filteredData = filteredData.filter(item => item[key] && regex.test(String(item[key]).toLowerCase()));
      }
    });
    // Tìm kiếm theo 'startDate' va 'endDate'
    const { startDate, endDate } = req.query;
    const config = {
      ipm: {
        pathname: '/ipm',
        date_field: 'lastRechargeDate',
      },
      // Thêm các object con khác ở đây
    };
    let date_field = null;
    for (const key in config) {
      if (config[key].pathname && req._parsedUrl.pathname.includes(config[key].pathname)) {
        date_field = config[key].date_field;
        break;
      }
    }
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    if (startDateObj || endDateObj) {
      filteredData = filteredData.filter(item => {
        const itemDate = new Date(item[date_field]);
        if (startDateObj && !endDateObj && itemDate < startDateObj) {
          return false;
        }
        if (!startDateObj && endDateObj && itemDate > endDateObj) {
          return false;
        }
        if (startDateObj && endDateObj) {
          if (itemDate < startDateObj || itemDate > endDateObj) {
            return false;
          }
        }
        return true;
      });
    }

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return order === 'ASC' ? -1 : 1;
        }
        if (a[sort] > b[sort]) {
          return order === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
      },
    });
  } else {
    next();
  }
});

router.render = (_req, res) => {
  const data = res.locals.data;

  // console.log(data)

  if (res.locals.pagination) {
    res.jsonp({
      data: data.slice(
        (res.locals.pagination.currentPage - 1) * res.locals.pagination.perPage,
        res.locals.pagination.currentPage * res.locals.pagination.perPage,
      ),
      pagination: res.locals.pagination,
    });
  } else {
    res.jsonp(data);
  }
};

server.use('/common/info', router);
server.use('/kfm/kim', router);
server.use('/kfm/sim', router);
server.use('/crm/mp', router);
server.use('/kfm/tvr', router);
server.use('/kfm/kms', router);
server.use('/kfm/ms', router);
server.use('/rm/cl', router);

const PORT = 1234;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
