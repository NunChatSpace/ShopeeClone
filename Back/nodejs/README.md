### API: /api/view/{Component or Page}
- [x] /api/view/init
- [x] /api/view/category
  - DB: category
- [x] /api/view/recommend
  - DB: recommend
- [x] /api/view/advertisement
  - DB: advertisement
- [ ] /api/view/itemlist
  - Db: itemlist

### API: /authen/
- [x] /authen/login
- [x] /authen/register

### API: /api/action/{Page}/{action}
- [ ] TBD

### DATABASE
- itemlist
    ```
        {
            {
                id: {
                    type: String,
                    require: true
                },
                name: {
                    type: String,
                    require: true
                },
                src: {
                    type: String,
                    require: true
                },
                tagsEnum: {
                    type: [Number]
                },
                imgCount: {
                    type: Number,
                    min: 1,
                    max: 10,
                    require: true
                },
                url: {
                    type: String,
                    require: true
                }
            }
        }
    ```
- advertisement
    ```
        {
            name: {
                type: String
            },
            image: {
                type: String
            },
            url: {
                type: String
            }
        }
    ```
- category
    ```
        {
            image: {
                type: String
            },
            text: {
                type: String
            },
            url: {
                type: String
            }
        }
    ```
- recommend
    ```
        {
            image: {
                type: String
            },
            text: {
                type: String
            },
            url: {
                type: String
            }
        }
    ```
- user
    ```
        {
            username: {
                type: String,
                require: true,
                unique: true
            },
            password: {
                type: String,
                require: true
            }
        }
    ```