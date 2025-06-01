import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this post.'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add pre-save middleware for validation
PostSchema.pre('save', function(next) {
  console.log('Pre-save middleware running for post:', this);
  next();
});

// Add error handling for model operations
PostSchema.post('save', function(error: any, doc: any, next: any) {
  if (error) {
    console.error('Error saving post:', error);
    next(error);
  } else {
    console.log('Post saved successfully:', doc);
    next();
  }
});

// Check if model exists before creating
const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post; 