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
      if (!['page', 'limit', 'sort', 'order', 'q'].includes(key)) {
        const regex = new RegExp(String(filterValue).toLowerCase(), 'i');
        filteredData = filteredData.filter(item => item[key] && regex.test(String(item[key]).toLowerCase()));
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

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
