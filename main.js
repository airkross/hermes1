    if (window.matchMedia("(min-width: 1024px)").matches) {
        var subNavColl = document.querySelectorAll('.sub-nav');
        for (var i = 0; i < subNavColl.length; i++) {
            subNavColl[i].addEventListener('mouseover', function () {
                document.querySelector('.dropdown-menu').classList.toggle('db');
            });
            subNavColl[i].addEventListener('mouseout', function () {
                document.querySelector('.dropdown-menu').classList.toggle('db');
            });
        }
    }
    if (window.matchMedia("(max-width: 1023px)").matches) {
        console.log(11);

        var subBurger = document.getElementById('subBurger');
        if (subBurger) {
            subBurger.addEventListener('click', function () {
                if (document.querySelector('.header .menu')) {
                    if (document.querySelector('.header .menu').classList.contains('db')) {
                        document.querySelector('.header .menu').classList.remove('db');
                    }
                }
                document.querySelector('.sub-nav .sub-menu').classList.toggle('db');
            });
        }
        var headerBurger = document.getElementById('headerBurger');
        if (headerBurger) {
            console.log(22);
            headerBurger.addEventListener('click', function () {
                if (document.querySelector('.sub-nav .sub-menu')) {
                    if (document.querySelector('.sub-nav .sub-menu').classList.contains('db')) {
                        document.querySelector('.sub-nav .sub-menu').classList.remove('db');
                    }
                }
                document.querySelector('.header .menu').classList.toggle('db');
            });
        }
    }

    var acLiColl = document.querySelectorAll('.ac-menu-item');
    var acLiCollM = document.querySelectorAll('.sub-menu-item');
    // var acSub = document.querySelectorAll('.ac-sub ');
    var acSubItem;
    var acSub = document.querySelectorAll('.ac-sub');
    for (var i = 0; i < acSub.length; i++) {
        acSubItem = acSub[i].querySelectorAll('.ac-sub-item');
        for (var j = 0; j < acSubItem.length; j++) {
            // console.log(2)

            // acSub[i][j].addEventListener('click', function () {

            // });
        }
    }
    // console.log(acLiColl)
    for (var i = 0; i < acLiColl.length; i++) {
        acLiColl[i].addEventListener('click', function () {
            for (var j = 0; j < acLiColl.length; j++) {
                // console.log(acLiColl[j].querySelector('.ac-sub'));
                if (acLiColl[j].querySelector('.ac-sub')) {
                    if (acLiColl[j] != this && acLiColl[j].querySelector('.ac-sub').classList.contains('db-ac')) {
                        acLiColl[j].querySelector('.ac-sub').classList.remove('db-ac');
                    }
                }

            }
            // if (this.querySelector('.ac-sub') != null) {
            this.querySelector('.ac-sub').classList.add('db-ac');
            // }
            // console.log(1);
        });
    }
    var catPageContent = document.querySelector('.cat-page-content');
    var catP = {
        "1": {
            "name": 'Очистители и гидрофобизаторы',
            "arr": ['Очистители и гидрофобизаторы', 'Очистители и гидрофобизаторы', 'Очистители и гидрофобизаторы', 'Антисептик']
        },
        "2": {
            "name": 'Гидроизоляционные составы и добавки',
            "arr": [
                'Эластичная гидроизоляция', 'Проникающая гидроизоляция', 'Гидроизоляционные мембраны', 'Полиуритановые мастики',
                'Штукатурные мастики', 'Инъекционная гидроизоляция', 'Деформационные швы', 'Остановка активных протечек',
                'Герметизация швов', 'Гидропрокладки и профили', 'Гидроизоляционные добавки', 'Герметики'
            ]
        },
        "3": {
            "name": 'Составы для ремонта, укрепления и усиления железобетонных конструкций',
            "arr": ['Ремонтные составы', 'Ремонтные составы на эпоксидной основе', 'Инъекционные составы', 'Инъекционные составы на эпоксидной основе']
        },
        "4": {
            "name": 'Промышленные полы',
            "arr": [
                'Наливные полы на полимерной основе', 'Наливные полы на минеральной основе', 'Составы для упрочнения и обеспыливания', 'Грунтовочные составы',
                'Лаки', 'Вспомогательные материалы'

            ]
        },
        "5": {
            "name": 'Антистатические покрытия',
            "arr": []
        },
        "6": {
            "name": 'Защита металлических конструкций',
            "arr": ['Антикоррозионные материалы', 'Антикоррозионная защита на полиуритановой основе', 'Антикоррозионная защита на эпоксилной основе']
        },
        "7": {
            "name": 'Термокраски и огнезащита',
            "arr": ['Огнезащитные краски', 'Огнезащитные составы']
        },
        "8": {
            "name": 'Инструменты и оборудование',
            "arr": []
        },
        "9": {
            "name": 'Составы для реконструкции и реставраци',
            "arr": ['Санирующие составы', 'Отсечная гидроизоляция', 'Микроцементы']
        },
    }
    var solP = {
        "1": {
            "name": 'Гидроизоляция',
            "arr": [{
                    "name": 'Гидроизоляция на этапе строительства',
                    "content": [{
                            'name': 'Стармекс Сил Флекс (Starmex Seal Flex)',
                            "discr": 'Стармекс Сил Флекс – эластичное износостойкое гидроизоляционное покрытие с высокой адгезией к минеральным и металлическим поверхностям. Материал обладает способностью перекрывать трещины. Покрытие является абразивостойким и химстойким к действию коррозионно-активных жидкостей, таких как разбавленные кислоты и щелочи. Обладает хорошей УФ-стойкостью.'
                        },
                        {
                            'name': 'Стармекс Сил Флекс (Starmex Seal Flex)',
                            "discr": 'Стармекс Сил Флекс – эластичное износостойкое гидроизоляционное покрытие с высокой адгезией к минеральным и металлическим поверхностям. Материал обладает способностью перекрывать трещины. Покрытие является абразивостойким и химстойким к действию коррозионно-активных жидкостей, таких как разбавленные кислоты и щелочи. Обладает хорошей УФ-стойкостью.'
                        },
                    ]
                }, {
                    'name': 'Гидроизоляция с наружной стороны (монолит, кирпич, ФБС)',
                    "content": [{
                        'name': 'Стармекс Эласт (Starmex Elast)',
                        "discr": 'Эластичное износостойкое гидроизоляционное покрытие с высокой адгезией к минеральным и металлическим поверхностям. Материал обладает способностью перекрывать трещины. Покрытие является абразивостойким и химстойким к действию коррозионно-активных жидкостей, таких как разбавленные кислоты и щелочи. Обладает хорошей УФ-стойкостью.'
                    }]
                }, {
                    'name': 'Гидроизоляция резервуаров (металлические и железобетонные)',
                    "content": [{
                        'name': 'Стармекс 1К Флекс (Starmex 1K Flex)',
                        "discr": 'Эластичное износостойкое гидроизоляционное покрытие с высокой адгезией к минеральным и металлическим поверхностям. Однокомпонентный материал, смешивается с водой. Обладает способностью перекрывать трещины. Покрытие является абразивостойким и стойким к действию коррозионно-активных жидкостей, таких как разбавленные кислоты и щелочи. Обладает высокой УФ-стойкостью.'
                    }]
                }, {
                    'name': 'Гидроизоляция опалубочных отверстий',
                    "content": [{
                        'name': 'ДенсТоп ПУ 227 Эластик (DensTop PU 227 Elastic)',
                        "discr": 'Двухкомпонентный состав на полиуретановой основе, образующий после нанесения эластичное и одновременно очень прочное покрытие, обладающее высокой стойкостью к действию воды, солевых растворов, моющих средств, горюче-смазочных материалов, а также кратковременным воздействиям растворителей, кислот и щелочей. Используется для защиты бетонных и металлических конструкций. Не содержит растворителей.'
                    }]
                },
                {
                    'name': 'Гидроизоляция места ввода коммуникации',
                    "content": [{
                        'name': 'ДенсТоп ПУ 325 Аква (DensTop PU 325 Aqua)',
                        "discr": 'Однокомпонентная гибридная полиуретановая смола на водной основе, образующая после нанесения эластичную бесшовную гидроизоляционную мембрану, устойчивую к действию стоячей воды и УФ-излучения. Продукт подходит для всех типов кровель и открытых площадок.'
                    }]
                }, {
                    'name': 'Гидроизоляция душевы',
                    "content": [{
                        'name': 'ДенсТоп ПС 391 (DensTop PS 391)',
                        "discr": 'ДенсТоп ПС 391 – двухкомпонентная химстойкая полисульфидная мастика холодного отверждения. После полимеризации образует прочное эластичное покрытие, служащее для защиты бетона, металлических конструкций, кирпичной и каменной кладки, деревянных поверхностей, асфальта и др.'
                    }]
                }, {
                    'name': 'Гидроизоляция колодца',
                    "content": [{
                        'name': 'ДенсТоп ЭП 710 Мастик (DensTop EP 710 Mastic)',
                        "discr": 'Двухкомпонентный состав на эпоксидно-полиуретановой основе для защиты и гидроизоляции бетонных и стальных конструкций. После полимеризации продукт образует прочное твердо-эластичное покрытие с высокой стойкостью к действию химических веществ и механическим нагрузкам.'
                    }]
                }
                // ,
                // {
                //     'name': 'Гидроизоляция бассейна',
                //     "content": {
                //         'name': 'ДенсТоп ЭП 710 Мастик (DensTop EP 710 Mastic)',
                //         "discr": 'Двухкомпонентный состав на эпоксидно-полиуретановой основе для защиты и гидроизоляции бетонных и стальных конструкций. После полимеризации продукт образует прочное твердо-эластичное покрытие с высокой стойкостью к действию химических веществ и механическим нагрузкам.'
                //     }
                // }
                // , 'Остановка активных протечек', 'Гидроизоляция швов (герметизация)',
                // 'Гидроизоляция трещин (герметизация)', 'Гидроизоляция подвалов', 'Гидроизоляция подземных парковок',
                // 'Гидроизоляция деформационных швов', 'Гидроизоляция эксплуатируемой кровли (ЭПДМ мембраны)',
                // 'Гидроизоляция кровли (полиуретановая мастика)', 'Гидроизоляция террас (ЭПДМ мембрана, Эластичная гидроизоляция, полиуретановая мастика)'
            ],

        },
        "2": {
            "name": 'Ремонт и защита',
            "arr": [{
                    'name': 'Ремонт трещин',
                    "content": [{
                        'name': 'Стармекс Сил (Starmex Seal)',
                        "discr": 'Стармекс Сил – минеральное покрытие, содержащее активные компоненты, обеспечивающие герметизацию пор бетона и образование объемного гидроизоляционного слоя. Стармекс Сил обладает высокой водонепроницаемостью и абразивостойкостью, а также высокой химстойкостью. Благодаря осмотическому действию, достигается высокая адгезия смеси к поверхности и герметизация пор бетона. Помимо процесса гидратации цемента при нанесении Стармекс Сил протекают реакции кристаллизации, что обеспечивает способность покрытия перекрывать микротрещины.'
                    }]
                }, {
                    'name': 'Ремонт бетона до 10мм',
                    "content": [{
                        'name': 'Стармекс Кристалл (Starmex Crystal)',
                        "discr": 'Стармекс Кристалл – сухая гидроизоляционная смесь, содержащая активные компоненты, проникающие в тело бетона по порам, капиллярам и микротрещинам. В структуре бетона между активными компонентами Стармекс Кристалл и продуктами гидратации цемента происходит химическая реакция, в результате которой образуются нерастворимые кристаллические соединения, препятствующие проникновению воды в бетон, но сохраняющие при этом его паропроницаемость.'
                    }, {
                        'name': 'Стармекс Кристалл (Starmex Crystal)',
                        "discr": 'Стармекс Кристалл – сухая гидроизоляционная смесь, содержащая активные компоненты, проникающие в тело бетона по порам, капиллярам и микротрещинам. В структуре бетона между активными компонентами Стармекс Кристалл и продуктами гидратации цемента происходит химическая реакция, в результате которой образуются нерастворимые кристаллические соединения, препятствующие проникновению воды в бетон, но сохраняющие при этом его паропроницаемость.'
                    }]
                }, {
                    'name': 'Ремонт бетона более 10мм',
                    "content": [{
                        'name': 'Стармекс 111 (Starmex 111)',
                        "discr": 'Стармекс 111 – сухая смесь на основе цемента, образует гидроизоляционное покрытие с высокой водонепроницаемостью и адгезией к минеральным поверхностям.'
                    }]
                }
                // , 'Ремонт бетона при наличии оголенной арматуры',
                // 'Подливочные (литьевые) составы', 'Ремонт трещин шириной раскрытия до 0,5 мм (шириной раскрытия более 0,5 мм)', 'Устройство противофильтрационной завесы', 'Восстановление способности кирпичной кладки',
                // 'Устройство отсечной гидроизоляции', 'Антистатические покрытия'
            ]
        },
        "3": {
            "name": 'Промышленные полы',
            "arr": [{
                    'name': 'Промышленные полы',
                    "content": [{
                        'name': 'Преласти СТ (Prelasti ST)',
                        "discr": 'Преласти СТ (Стандарт Термобонд) представляет собой эластомерную гидроизоляционную мембрану, изготовленную из вулканизованного этилен-пропиленового каучука ЭПДМ. Изделие используется для гидроизоляции кровли и изготавливается в заводских условиях. Заводское изготовление обеспечивает быструю и безопасную установку. Преласти СТ характеризуется чрезвычайной долговечностью и при этом является экологически чистым продуктом.'
                    }]
                },
                {
                    'name': 'Промышленные полы',
                    "content": [{
                        'name': 'Манодил Бонд Ф / Витрафин Бонд Ф (Manodil Bond F / Vitrafin Bond F)',
                        "discr": 'Манодил Бонд Ф (Витрафин Бонд Ф) представляет собой однокомпонентную пастообразную мастику на основе силил-модифицированного полимера, который, полимеризуясь во влажных условиях, образует эластичный продукт. Материал может применяться для площадной гидроизоляции и защиты, а также для приклейки ЭПДМ-мембраны к бетону.'
                    }]
                },
                {
                    'name': 'Промышленные полы',
                    "content": [{
                        'name': 'Лента Термобонд (Thermobond Splice Strip)',
                        "discr": 'Соединительная лента Термобонд используется для обработки деталей круглой формы, таких как фланцевые стаканы для трубопроводов или водоотводы. Это изделие состоит из верхнего слоя, выполненного из вулкнизованного этилен-пропиленового каучука ЭПДМ, и нижнего слоя, изготовленного из материала Термобонд, который можно расплавлять для сварки полотен.'
                    }]
                },
                {
                    'name': 'Промышленные полы',
                    "content": [{
                        'name': 'Контактный клей П400 на каучуковой основе (Contact Adhesive P400)',
                        "discr": 'П400 - адгезив, предназначенный для приклеивания мембраны и полос мембраны по периметру кровли и вокруг каждого выступа, а также для крыш с уклоном (менее 20%) (на различные виды опор, такие как бетон, кирпичная кладка, дерево, старый герметик и др.)'
                    }]
                }
            ]
        },
        "4": {
            "name": 'Защита металлических поверхностей',
            "arr": [{
                    'name': 'Антикоррозионная защита',
                    "content": [{
                        'name': 'ДенсТоп ПУ 325 Аква (DensTop PU 325 Aqua)',
                        "discr": 'Однокомпонентная гибридная полиуретановая смола на водной основе, образующая после нанесения эластичную бесшовную гидроизоляционную мембрану, устойчивую к действию стоячей воды и УФ-излучения. Продукт подходит для всех типов кровель и открытых площадок.'
                    }]
                }, {
                    'name': 'Модификаторы ржавчины',
                    "content": [{
                        'name': 'ДенсТоп ПУ 227 Эластик (DensTop PU 227 Elastic)',
                        "discr": 'Двухкомпонентный состав на полиуретановой основе, образующий после нанесения эластичное и одновременно очень прочное покрытие, обладающее высокой стойкостью к действию воды, солевых растворов, моющих средств, горюче-смазочных материалов, а также кратковременным воздействиям растворителей, кислот и щелочей. Используется для защиты бетонных и металлических конструкций. Не содержит растворителей.'
                    }]
                }
                // , {
                //     'name': 'Термокраски',

                // }, {
                //     'name': 'Защита металла',

                // }

            ]
        },
        "5": {
            "name": 'Гидрофобизаторы',
            "arr": [{
                'name': 'Очистка поверхности от высолов и грязи',
                "content": [{
                    'name': 'Стармекс РМ2 (Starmex RM2)',
                    "discr": 'Стармекс РМ2 – тиксотропный полимермодифицированный безусадочный ремонтный состав на цементной основе. Обладает превосходной адгезией даже к старым основаниям из минеральных строительных материалов. Продукт специально разработан для ремонта неглубоких дефектов и финишного выравнивания поверхности бетонных и железобетонных конструкций.'
                }]
            }, {
                'name': 'Защита и гидрофобизация поверхности от влаги и грязи',
                "content": [{
                    'name': 'Стармекс РМ3 (Starmex RM3)',
                    "discr": 'Стармекс РМ3 – высокопрочный тиксотропный ремонтный состав на цементной основе, содержащий полимерную фибру. Является безусадочным. Обладает превосходной адгезией даже к старым основаниям из минеральных строительных материалов.'
                }]
            }, {
                'name': 'Обеспыливание и упрочнение поверхности',
                "content": [{
                    'name': 'Стармекс РМ Супер (Starmex RM Super)',
                    "discr": 'Стармекс РМ Супер – тиксотропный полимермодифицированный безусадочный ремонтный состав на цементной основе с полимерной фиброй. Обладает великолепной удобоукладываемостью и высокой адгезией даже к старым основаниям из минеральных строительных материалов. Продукт специально разработан для ремонта глубоких дефектов и выравнивания поверхности бетонных и железобетонных конструкций и кирпичной кладки за 1 слой толщиной до 80 мм.'
                }]
            }, {
                'name': 'Обеспыливание и упрочнение поверхности',
                "content": [{
                    'name': 'Стармекс РМ5 (Starmex RM5)',
                    "discr": 'Стармекс РМ5 – высокопрочный фиброармированный ремонтный состав с быстрым набором прочности для конструкционного ремонта бетона. Обладает высокой адгезией к старым и новым основаниям из минеральных строительных материалов. Стармекс РМ5 характеризуется высокой химической стойкостью, особенно сульфатостойкостью. Может применяться как при положительных, так и при отрицательных температурах.'
                }]
            }, {
                'name': 'Обеспыливание и упрочнение поверхности',
                "content": [{
                    'name': 'Стармекс ТМ6 (Starmex TM6)',
                    "discr": 'Стармекс ТМ6 – однокомпонентный тиксотропный ремонтный состав на цементной основе со специально подобранными заполнителями. Имеет нормальное время схватывания, подходит для машинного нанесения методом мокрого торкретирования. Является безусадочным. Обладает превосходной адгезией даже к старым основаниям из минеральных строительных материалов.'
                }]
            }]
        }
    }
    var url = window.location.toString();
    url = url.split('/');
    if (url[url.length - 1] == 'solutions.html' || url[url.length - 1] == 'solutions.html#') {
        for (var i = 0; i < acLiColl.length; i++) {
            acLiCollM[i].addEventListener('click', function () {
                if (window.matchMedia("(max-width: 1023px)").matches) {
                    while (catPageContent.firstChild) {
                        catPageContent.removeChild(catPageContent.firstChild);
                    }
                   
                    for (var j = 0; j < solP[this.dataset.val].arr.length; j++) {
                        var catPageCardTitle = document.createElement('div'),
                            catPageCard = document.createElement('div');

                        catPageCardTitle.className = 'cat-page-card-title';
                        // console.log(solP[this.dataset.val].arr[j].name);
                        catPageCardTitle.innerHTML = solP[this.dataset.val].arr[j].name;
                        catPageCard.appendChild(catPageCardTitle);

                        for (var k = 0; k < solP[this.dataset.val].arr[j].content.length; k++) {

                            var catPageCardBodyBig = document.createElement('div'),
                                catPageCardBigImg = document.createElement('div'),
                                catPageCardBigDiscr = document.createElement('div'),
                                img = document.createElement('img');
                            img.src = 'img/s.png';
                            catPageCardBodyBig.className = 'cat-page-card-body-big';
                            catPageCardBigImg.className = 'cat-page-card-big-img';
                            catPageCardBigDiscr.className = 'cat-page-card-big-discr';
                            catPageCard.className = 'cat-page-card';

                            catPageCardBigDiscr.innerHTML = solP[this.dataset.val].arr[j].content[k].discr

                            catPageCardBigImg.appendChild(img);
                            catPageCardBodyBig.appendChild(catPageCardBigImg);
                            catPageCardBodyBig.appendChild(catPageCardBigDiscr);
                            catPageCard.appendChild(catPageCardBodyBig);
                        }
                        // for (var key in solP) {
                        //     // console.log(solP[key].arr)
                        //     for (var k = 0; k < solP[key].arr.length; k++) {
                        //         console.log(solP[key].arr.length)
                        //     }
                        // }

                        catPageContent.appendChild(catPageCard);
                    }
                }
            });



            acLiColl[i].addEventListener('click', function () {
                if (window.matchMedia("(min-width: 1024px)").matches) {
                    while (catPageContent.firstChild) {
                        catPageContent.removeChild(catPageContent.firstChild);
                    }
                    var acSubItem = this.querySelectorAll('.ac-sub-item');
                    for (var j = 0; j < solP[this.dataset.val].arr.length; j++) {
                        var catPageCardTitle = document.createElement('div'),
                            catPageCard = document.createElement('div');

                        catPageCardTitle.className = 'cat-page-card-title';
                        // console.log(solP[this.dataset.val].arr[j].name);
                        catPageCardTitle.innerHTML = solP[this.dataset.val].arr[j].name;
                        catPageCard.appendChild(catPageCardTitle);

                        for (var k = 0; k < solP[this.dataset.val].arr[j].content.length; k++) {

                            var catPageCardBodyBig = document.createElement('div'),
                                catPageCardBigImg = document.createElement('div'),
                                catPageCardBigDiscr = document.createElement('div'),
                                img = document.createElement('img');
                            img.src = 'img/s.png';
                            catPageCardBodyBig.className = 'cat-page-card-body-big';
                            catPageCardBigImg.className = 'cat-page-card-big-img';
                            catPageCardBigDiscr.className = 'cat-page-card-big-discr';
                            catPageCard.className = 'cat-page-card';

                            catPageCardBigDiscr.innerHTML = solP[this.dataset.val].arr[j].content[k].discr

                            catPageCardBigImg.appendChild(img);
                            catPageCardBodyBig.appendChild(catPageCardBigImg);
                            catPageCardBodyBig.appendChild(catPageCardBigDiscr);
                            catPageCard.appendChild(catPageCardBodyBig);
                        }
                        // for (var key in solP) {
                        //     // console.log(solP[key].arr)
                        //     for (var k = 0; k < solP[key].arr.length; k++) {
                        //         console.log(solP[key].arr.length)
                        //     }
                        // }

                        catPageContent.appendChild(catPageCard);
                    }
                }
            });
        }
    } else if (url[url.length - 1] == 'catalog-page.html' || url[url.length - 1] == 'catalog-page.html#') {

        for (var i = 0; i < acLiColl.length; i++) {


            // sssssssssssssssssssssssssssssssssssssssssssssssssss

            acLiCollM[i].addEventListener('click', function () {

                if (window.matchMedia("(max-width: 1023px)").matches) {
                    while (catPageContent.firstChild) {
                        catPageContent.removeChild(catPageContent.firstChild);
                    }
                    console.log(catP[this.dataset.val])
                    // var subNavBurgerTitle = document.querySelector('.sub-nav-burger-title');
                    // subNavBurgerTitle.innerHTML = catP[this.dataset.val].name;
                    for (var j = 0; j < catP[this.dataset.val].arr.length; j++) {
                        // console.log(2)
                        var catPageCard = document.createElement('div'),
                            catPageCardTitle = document.createElement('div'),
                            catPageCardBody = document.createElement('div'),
                            catPageCardBodyImg = document.createElement('div'),
                            catCageCardBodyContent = document.createElement('div'),
                            catPageCardBodyContentTitle = document.createElement('div'),
                            catPageCardBodyContentDiscr = document.createElement('div'),
                            catPageCardBodyContentBtn = document.createElement('div'),
                            btn = document.createElement('button'),
                            img = document.createElement('img');
                        img.src = 'img/bgi.png';
                        catPageCard.className = 'cat-page-card';
                        catPageCardTitle.className = 'cat-page-card-title';
                        catPageCardBody.className = 'cat-page-card-body';
                        catCageCardBodyContent.className = 'cat-page-card-body-content';
                        catPageCardBodyContentTitle.className = 'cat-page-card-body-content-title';
                        catPageCardBodyContentDiscr.className = 'cat-page-card-body-content-discr';
                        catPageCardBodyContentBtn.className = 'cat-page-card-body-content-btn';
                        btn.className = 'cat-page-card-btn-btn';
                        catPageCardBodyImg.className = 'cat-page-card-body-img';
                        catPageCardTitle.innerHTML = catP[this.dataset.val].arr[j];
                        catPageCardBodyContentTitle.innerHTML = catP[this.dataset.val].arr[j];
                        btn.innerHTML = 'Подробнее';
                        catPageCardBodyContentDiscr.innerHTML = 'Описание';

                        // append
                        catPageCardBodyContentBtn.appendChild(btn);

                        catCageCardBodyContent.appendChild(catPageCardBodyContentTitle);
                        catCageCardBodyContent.appendChild(catPageCardBodyContentDiscr);
                        catCageCardBodyContent.appendChild(catPageCardBodyContentBtn);

                        catPageCardBodyImg.appendChild(img);

                        catPageCardBody.appendChild(catPageCardBodyImg);
                        catPageCardBody.appendChild(catCageCardBodyContent);

                        catPageCard.appendChild(catPageCardTitle);
                        catPageCard.appendChild(catPageCardBody);
                        catPageContent.appendChild(catPageCard);
                    }

                    // var acSubItem = this.querySelectorAll('.ac-sub-item');
                    // for (var j = 0; j < acSubItem.length; j++) {
                    //     var catPageCard = document.createElement('div'),
                    //         catPageCardTitle = document.createElement('div'),
                    //         catPageCardBody = document.createElement('div'),
                    //         catPageCardBodyImg = document.createElement('div'),
                    //         catCageCardBodyContent = document.createElement('div'),
                    //         catPageCardBodyContentTitle = document.createElement('div'),
                    //         catPageCardBodyContentDiscr = document.createElement('div'),
                    //         catPageCardBodyContentBtn = document.createElement('div'),
                    //         btn = document.createElement('button'),
                    //         img = document.createElement('img');
                    //     img.src = 'img/bgi.png';
                    //     catPageCard.className = 'cat-page-card';
                    //     catPageCardTitle.className = 'cat-page-card-title';
                    //     catPageCardBody.className = 'cat-page-card-body';
                    //     catCageCardBodyContent.className = 'cat-page-card-body-content';
                    //     catPageCardBodyContentTitle.className = 'cat-page-card-body-content-title';
                    //     catPageCardBodyContentDiscr.className = 'cat-page-card-body-content-discr';
                    //     catPageCardBodyContentBtn.className = 'cat-page-card-body-content-btn';
                    //     btn.className = 'cat-page-card-btn-btn';
                    //     catPageCardBodyImg.className = 'cat-page-card-body-img';
                    //     catPageCardTitle.innerHTML = acSubItem[j].innerHTML;
                    //     catPageCardBodyContentTitle.innerHTML = acSubItem[j].innerHTML;
                    //     btn.innerHTML = 'Подробнее';
                    //     catPageCardBodyContentDiscr.innerHTML = 'Описание';

                    //     // append
                    //     catPageCardBodyContentBtn.appendChild(btn);

                    //     catCageCardBodyContent.appendChild(catPageCardBodyContentTitle);
                    //     catCageCardBodyContent.appendChild(catPageCardBodyContentDiscr);
                    //     catCageCardBodyContent.appendChild(catPageCardBodyContentBtn);

                    //     catPageCardBodyImg.appendChild(img);

                    //     catPageCardBody.appendChild(catPageCardBodyImg);
                    //     catPageCardBody.appendChild(catCageCardBodyContent);

                    //     catPageCard.appendChild(catPageCardTitle);
                    //     catPageCard.appendChild(catPageCardBody);
                    //     catPageContent.appendChild(catPageCard);
                    // }
                }
            });

            // sssssssssssssssssssssssssssssssssssss

            acLiColl[i].addEventListener('click', function () {

                if (window.matchMedia("(min-width: 1024px)").matches) {
                    while (catPageContent.firstChild) {
                        catPageContent.removeChild(catPageContent.firstChild);
                    }
                    var acSubItem = this.querySelectorAll('.ac-sub-item');
                    for (var j = 0; j < acSubItem.length; j++) {
                        var catPageCard = document.createElement('div'),
                            catPageCardTitle = document.createElement('div'),
                            catPageCardBody = document.createElement('div'),
                            catPageCardBodyImg = document.createElement('div'),
                            catCageCardBodyContent = document.createElement('div'),
                            catPageCardBodyContentTitle = document.createElement('div'),
                            catPageCardBodyContentDiscr = document.createElement('div'),
                            catPageCardBodyContentBtn = document.createElement('div'),
                            btn = document.createElement('button'),
                            img = document.createElement('img');
                        img.src = 'img/bgi.png';
                        catPageCard.className = 'cat-page-card';
                        catPageCardTitle.className = 'cat-page-card-title';
                        catPageCardBody.className = 'cat-page-card-body';
                        catCageCardBodyContent.className = 'cat-page-card-body-content';
                        catPageCardBodyContentTitle.className = 'cat-page-card-body-content-title';
                        catPageCardBodyContentDiscr.className = 'cat-page-card-body-content-discr';
                        catPageCardBodyContentBtn.className = 'cat-page-card-body-content-btn';
                        btn.className = 'cat-page-card-btn-btn';
                        catPageCardBodyImg.className = 'cat-page-card-body-img';
                        catPageCardTitle.innerHTML = acSubItem[j].innerHTML;
                        catPageCardBodyContentTitle.innerHTML = acSubItem[j].innerHTML;
                        btn.innerHTML = 'Подробнее';
                        catPageCardBodyContentDiscr.innerHTML = 'Описание';

                        // append
                        catPageCardBodyContentBtn.appendChild(btn);

                        catCageCardBodyContent.appendChild(catPageCardBodyContentTitle);
                        catCageCardBodyContent.appendChild(catPageCardBodyContentDiscr);
                        catCageCardBodyContent.appendChild(catPageCardBodyContentBtn);

                        catPageCardBodyImg.appendChild(img);

                        catPageCardBody.appendChild(catPageCardBodyImg);
                        catPageCardBody.appendChild(catCageCardBodyContent);

                        catPageCard.appendChild(catPageCardTitle);
                        catPageCard.appendChild(catPageCardBody);
                        catPageContent.appendChild(catPageCard);
                    }
                }
            });
        }
    }