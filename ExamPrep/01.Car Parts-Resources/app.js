window.addEventListener('load', solve);

function solve() {
        const carModelRef = document.getElementById('car-model');
        const carYearRef = document.getElementById('car-year');
        const partNameRef = document.getElementById('part-name');
        const partNumberRef = document.getElementById('part-number');
        const conditionRef = document.getElementById('condition');

        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', onNext);

        const infoList = document.querySelector('.info-list');
        const dataCollectort = [];
        const completeImgReg = document.getElementById('complete-img');
        const completeTextRef = document.getElementById('complete-text');
        const confirmListRef = document.querySelector('.confirm-list');

        function onNext(e) {
                e.preventDefault();

                const carModel = carModelRef.value
                const carYear = carYearRef.value
                const partName = partNameRef.value
                const partNumber = partNumberRef.value
                const condition = conditionRef.value

                dataCollectort.push(carModel);
                dataCollectort.push(carYear);
                dataCollectort.push(partName);
                dataCollectort.push(partNumber);
                dataCollectort.push(condition);

                if (!carModel || !partName || !partNumber || !condition || !carYear || !(carYear>=1980 && carYear<=2023)) {
                        return
                }

                const liElement = document.createElement('li');
                liElement.classList.add('part-content')
                infoList.appendChild(liElement);

                const article = createArticle(carModel, carYear, partName, partNumber, condition);
                liElement.appendChild(article);

                const editBtn = createBtn('edit-btn', 'Edit', onEdit);
                const continueBtn = createBtn('continue-btn', 'Continue', onContinue);

                liElement.appendChild(editBtn);
                liElement.appendChild(continueBtn);

                completeImgReg.style.display = 'none';
                completeTextRef.textContent = '';

                e.currentTarget.setAttribute('disabled', 'disabled');
                carModelRef.value = '';
                carYearRef.value = '';
                partNameRef.value = '';
                partNumberRef.value = '';
                conditionRef.value = '';
        }

        function createArticle(carModel, carYear, partName, partNumber, condition) {
                const article = document.createElement('article');
                const pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${carModel}`;
                article.appendChild(pModel);

                const pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${carYear}`;
                article.appendChild(pYear);

                const pPartsName = document.createElement('p');
                pPartsName.textContent = `Part Name: ${partName}`;
                article.appendChild(pPartsName);

                const pPartsNumber = document.createElement('p');
                pPartsNumber.textContent = `Part Number: ${partNumber}`;
                article.appendChild(pPartsNumber);

                const pCond = document.createElement('p');
                pCond.textContent = `Condition: ${condition}`;
                article.appendChild(pCond);

                return article
        }

        function createBtn(classes, text, handler) {
                const btn = document.createElement('button');
                btn.textContent = text;
                btn.classList.add(classes);
                btn.addEventListener('click', handler);
                return btn
        }

        function onEdit(e) {
                carModelRef.value = dataCollectort[0];
                carYearRef.value = dataCollectort[1];
                partNameRef.value = dataCollectort[2];
                partNumberRef.value = dataCollectort[3];
                conditionRef.value = dataCollectort[4];
                nextBtn.removeAttribute('disabled');
                const liElement = e.currentTarget.parentElement.remove()
        }

        function onContinue(e) {
                const article = e.currentTarget.parentElement.children[0];

                e.currentTarget.parentElement.remove()
                const liElement = document.createElement('li');
                liElement.classList.add('part-content');
                confirmListRef.appendChild(liElement);
                liElement.appendChild(article)
                const confirmBtn = createBtn('confirm-btn', 'Confirm', onConfirm);
                const cancelBtn = createBtn('cancel-btn', 'Cancel', onCancel);
                liElement.appendChild(confirmBtn);
                liElement.appendChild(cancelBtn);
        }

        function onConfirm(e) {
                e.currentTarget.parentElement.remove();
                nextBtn.removeAttribute('disabled');
                completeImgReg.style.display = 'inline';
                completeTextRef.textContent = 'Part is Ordered!'
        }

        function onCancel(e) {
                nextBtn.removeAttribute('disabled');
                e.currentTarget.parentElement.remove();
        }


}




