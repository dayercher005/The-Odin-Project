export {HashMap}

class HashMap{

    constructor(){
        this.load_factor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    resize(){
        const prevBuckets = this.entries();
        this.capacity = this.capacity * 2;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);

        for(let i = 0; i < prevBuckets.length; i++){
            this.set(prevBuckets[i][0], prevBuckets[i][1]);
        }
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value){

        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];

        for (let i = 0; i < bucketArray.length; i++){
            if (bucketArray[i].key === key){
                bucketArray[i].value = value
                return
            }
        }

        bucketArray.push({key, value});

        if (this.length() > this.capacity * this.load_factor){
            this.resize();
        }

    }

    get(key){

        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        console.log(bucketArray)

        for (let i = 0; i < bucketArray.length ; i++){
            if (bucketArray[i].key === key){
                return bucketArray[i].value;
            }
        }
        return null
    }

    has(key){

        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        for (let i = 0; i < bucketArray.length ; i++){
            if (bucketArray[i].key === key){
                return true
            }
        return false
        }
    }

    remove(key){
        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        for (let i = 0; i < bucketArray.length; i++){
            if (bucketArray[i].key === key){
                bucketArray.splice(i, 1)
                return true
            }
        return false
        }
    }

    length(){
        
        let keyNumber = 0;

        for (let index = 0; index < this.buckets.length; index++){
            const bucketArray = this.buckets[index];
            for (let i = 0; i < bucketArray.length; i++){
                if (this.buckets[index][i].key){
                    keyNumber++;
                } 
            }
        }
        return keyNumber;
    }
    

    clear(){
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }


    keys(){
        const keyArray = [];

        for (let index = 0; index < this.buckets.length; index++){
            const bucketArray = this.buckets[index];
            for (let i = 0; i < bucketArray.length; i++){
                if (this.buckets[index][i].key){
                    keyArray.push(this.buckets[index][i].key);
                } 
            }
        }
        return keyArray;
    }


    values(){
        const valueArray = [];
        
        for (let index = 0; index < this.buckets.length; index++){
            const bucketArray = this.buckets[index];
            for (let i = 0; i < bucketArray.length; i++){
                if (this.buckets[index][i].value){
                    valueArray.push(this.buckets[index][i].value);
                } 
            }
        }
        return valueArray;

    }


    entries(){
        const entriesArray = [];

        for (let index = 0; index < this.buckets.length; index++){
            const bucketArray = this.buckets[index];
            for (let i = 0; i < bucketArray.length; i++){
                if (this.buckets[index][i]){
                    entriesArray.push([this.buckets[index][i].key, this.buckets[index][i].value]);
                } 
            }
        }
        return entriesArray;
    }
}
