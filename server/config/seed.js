/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Book = require('../api/book/book.model');


Book.find({}).remove(function() {
    Book.create(
        {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },
       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       },

       {
            title: 'JavaScript patterns',
            author: 'Stoyan Stefanov',
            yearPublished: 2999,
            type: 'Technical',
            genre: 'Programming',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat neque, auctor ac interdum eu, vulputate molestie mi. Quisque imperdiet, elit vel condimentum tincidunt, enim augue accumsan mauris, id dignissim metus enim nec nulla. Phasellus sapien felis, luctus vel pellentesque vel, lobortis id mauris. In hac habitasse platea dictumst. Donec eget molestie augue, ac mattis elit. Maecenas venenatis placerat commodo. ',
            imagePath: '/none'
       }

    );
});
